import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'firebase/firestore';
import {db} from '../../../firebase/firebaseconfig';
import Pagination from '../../../components/pagination/pagination';
import Members from './members/members';

const OurCommunity = () => {

    const [members, setMembers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    useEffect(() => {
        const fetchMembers = async () => {
            var showcaseRef = db.collection('community');
            await showcaseRef.orderBy('approved').get().then(snapshot => {
                this.membersStore= []
                snapshot.forEach(doc => {
                    const data = doc.data()
                     this.membersStore.push(data)
                })
            });
            setMembers(this.membersStore);
            
        }

        fetchMembers();
    }, []);

    //get current posts
    const indexOfLastShowcase= currentPage * postsPerPage;
    const indexOfFirstShowcase = indexOfLastShowcase - postsPerPage;
    const currentShowcase = members.slice(indexOfFirstShowcase, indexOfLastShowcase);

        //Change Page
        const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return ( 
        <Container>
            <Row>
                <div>
                <Members members={currentShowcase} />
                <Pagination postsPerPage={postsPerPage} totalPosts={members.length} paginate={paginate} />
                </div>
            </Row>
        </Container>
     );
}
 
export default OurCommunity;