<template>
    <div class="sg-page-content">

        <section class="after-track-order text-center">
            <div class="container">
                <div class="page-title">
                    <h1>{{lang.thank_for_purchase}}</h1>
                    <p>{{lang.a_summary_has_been}}<a href="#">{{lang.email_example}}</a></p>
                    <h2>{{lang.Order_ID}}</h2>
                </div>

                <div class="step-content">
                    <div class="table-responsive">
                        <table class="table">
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">{{lang.product_name}}</th>
                                <th scope="col">{{lang.quantity}}</th>
                                <th scope="col">{{lang.payment_status}}</th>
                                <th scope="col">{{lang.delivery_status}}</th>
                                <th scope="col">{{lang.total_amount}}</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <th>01</th>
                                <td>
                                    <div class="product-name">
                                        <p>{{lang.classic_shirt_formal_dress_jersey}}</p>
                                        <span>{{lang.sKU}}</span>
                                    </div>
                                </td>
                                <td>01</td>
                                <td>Paid</td>
                                <td>Cash on Delivery</td>
                                <td>$406.00</td>
                            </tr>
                            <tr>
                                <th>02</th>
                                <td>
                                    <div class="product-name">
                                        <p>Classic T-shirt Sleeves and Formal Dress 100% Cotton Single Jersey</p>
                                        <span>SKU: C0214D25R-140</span>
                                    </div>
                                </td>
                                <td>01</td>
                                <td>Paid</td>
                                <td>Cash on Delivery</td>
                                <td>$406.00</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="account-table">
                        <div class="title">
                            <h1>Account Details</h1>
                        </div>
                        <div class="table-responsive">
                            <table class="table text-start">
                                <tbody>
                                <tr>
                                    <td>
                                        <ul class="global-list">
                                            <li>Order Code :</li>
                                            <li>Name :</li>
                                            <li>Email :</li>
                                            <li>Shipping Address :</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul class="global-list">
                                            <li>YOORI12345678910</li>
                                            <li>Gopal Talukder</li>
                                            <li>gopal@gmail.com</li>
                                            <li>Concord Shopping Complex,</li>
                                            <li>Lake City, Khilkhet, Dhaka-1229</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul class="global-list">
                                            <li>Order Date :</li>
                                            <li>Order Status :</li>
                                            <li>Payment Status :</li>
                                            <li>Shipping :</li>
                                            <li>Delivery Status :</li>
                                        </ul>
                                    </td>
                                    <td>
                                        <ul class="global-list">
                                            <li>02-12-2021 10:58 AM</li>
                                            <li>Pending</li>
                                            <li>Paid</li>
                                            <li>Flat Shipping Rate</li>
                                            <li>Cash on Delivery</li>
                                        </ul>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class="row">
                            <div class="col-md-4 offset-md-8">
                                <div class="order-summary">
                                    <div class="sg-card">
                                        <ul class="global-list">
                                            <li>Subtotal <span>$967.00</span></li>
                                            <li>Discount Offer <span>$00.00</span></li>
                                            <li>Delivery Charge <span>$13.00</span></li>
                                            <li>Shipping Tax <span>$5.00</span></li>
                                        </ul>
                                        <div class="order-total mb-0">
                                            <p>Total <span>$985.00</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- /.container -->
        </section><!-- /.track-order -->

    </div>
</template>

<script>
export default {
    name: "order-confirmation",
    metaInfo() {
        return{
            title:"Order-Confirmation"
        }
    },
    mounted() {
    }
}
</script>
