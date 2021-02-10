import React, {useState, useEffect} from 'react';
import {db} from '../../../firebase/firebaseconfig';
import MerchItem from '../merch/merchitem/merchitem';
import Pagination from '../../../components/pagination/pagination';
import './merch.css';


const Merch = () => {
    const [merch, setMerch] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);


    useEffect(() => {
        const fetchMerch = async () => {
        
            await db.collection('merch').orderBy('date', "desc").get().then(snapshot => {
                this.merchstore = []
                snapshot.forEach(doc => {
                    const data = doc.data()
                     this.merchstore.push(data)
                })
            });
            setMerch(this.merchstore);
            
            
        }
        
        fetchMerch();
    }, []);

    //get current posts
    const indexOfLastMerch = currentPage * postsPerPage;
    const indexOfFirstMerch = indexOfLastMerch - postsPerPage;
    const currentMerch = merch.slice(indexOfFirstMerch, indexOfLastMerch);

    //Change Page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    


return (
    <div className="green">
        <h5 className="showcasetitle">Our Merch</h5>
        <MerchItem merch={currentMerch} />
        <Pagination postsPerPage={postsPerPage} totalPosts={merch.length} paginate={paginate} />
    </div>
)
        
    
}

export default Merch;
