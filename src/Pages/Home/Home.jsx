import React from 'react'; 
import Header from '../Header/Header';
import ProductCard from '../../Components/ProductCard';
import Layout from '../../Layout/Layout';

const Home = () => {
    return (
        <Layout>
            <Header/>
            <ProductCard/>
        </Layout>
    );
};

export default Home;