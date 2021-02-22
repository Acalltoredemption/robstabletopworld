import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'firebase/firestore';
import {db} from '../../firebase/firebaseconfig';
import Item from '../community/communityitem/communityitem'; 
import Pagination from '../../components/pagination/pagination';
import './community.css'

const Community = () => {

    const [showcase, setShowcase] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(9);

    useEffect(() => {
        const fetchShowcase = async () => {
            var showcaseRef = db.collection('showcase');
            await showcaseRef.orderBy('approved').get().then(snapshot => {
                this.showcasestore = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                     this.showcasestore.push(data)
                })
            });
            setShowcase(this.showcasestore);
            
        }

        fetchShowcase();
    }, []);

    //get current posts
    const indexOfLastShowcase= currentPage * postsPerPage;
    const indexOfFirstShowcase = indexOfLastShowcase - postsPerPage;
    const currentShowcase = showcase.slice(indexOfFirstShowcase, indexOfLastShowcase);

        //Change Page
        const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return ( 
        <Container>
            <Row>
                <div>
                <Item items={currentShowcase} />
                <div className="paginationholder">
                <Pagination postsPerPage={postsPerPage} totalPosts={showcase.length} paginate={paginate} />
                </div>
                </div>
            </Row>
        </Container>
     );
}
 
export default Community;