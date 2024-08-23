// eslint-disable-next-line no-unused-vars
import React from 'react'
import Navbar from '../components/Navbar/Navbar';
import Newsletter from '../components/Newsletter/Newsletter';
import Footer from '../components/Footer/Footer';


const OrderHistory = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>

            <main>
                {/* Newsletter */}
                <section>
                    <Newsletter />
                </section>
            </main>

            <footer>
                <Footer />
            </footer>

        </div>
    )
}

export default OrderHistory