<template>
    <div class="pagination">
        <div class="container">
            <section class="">
                <div class="">
                    <div class="0000">
                        <div>
                            <div class="row">
                                <div class="col Card1">
                                    <div>
                                        <div>
                                            <div class="mt-1">
                                                <h5>Free</h5>
                                                <h2>$0</h2>
                                                <p>per mounth</p>
                                            </div>
                                        </div>
                                        <p>1 User <br>Feature 2 <br>Feature 3 <br>Feature 4
                                        </p>
                                        <div class="text-center">
                                            <a class="btn btn-primary mb-2" href="https://nicepage.com/"
                                                target="_blank">get plan</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col Card2">
                                    <div class="">
                                        <div>
                                            <div class="mt-1">
                                                <h5>Standart</h5>
                                                <h2>$19</h2>
                                                <p>per mounth</p>
                                            </div>
                                        </div>
                                        <p>5 Users<br>Feature 2 <br>Feature 3 <br>Feature 4
                                        </p>
                                        <div class="text-center">
                                            <a class="btn btn-primary mb-2" href="https://nicepage.com/"
                                                target="_blank">get plan</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col Card3">
                                    <div>
                                        <div>
                                            <div class="mt-1">
                                                <h5>
                                                    Business</h5>
                                                <h2>$59
                                                </h2>
                                                <p>per mounth</p>
                                            </div>
                                        </div>
                                        <p>15 Users<br>Feature 2 <br>Feature 3 <br>Feature 4
                                        </p>
                                        <div class="text-center">
                                            <a class="btn btn-primary mb-2" href="https://nicepage.com/"
                                                target="_blank">get plan</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col Card4">
                                    <div>
                                        <div>
                                            <div class="mt-1">
                                                <h5>Professional</h5>
                                                <h2>$229</h2>
                                                <p>per mounth</p>
                                            </div>
                                        </div>
                                        <p>Unlimited Users<br>Feature 2 <br>Feature 3
                                            <br>Feature 4
                                        </p>
                                        <div class="text-center">
                                            <a class="btn btn-primary mb-2" href="https://nicepage.com/"
                                                target="_blank">get plan</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'paginacao',

    data() {
        return {
            passengers: [],
            offset: 0,
            limit: 50,
            total: null
        }
    },
    created() {
        this.getPassengers();
    },
    methods: {
        getPassengers() {
            var list = axios.create();
            const BASE_URL = 'https://api.instantwebtools.net';
            const url = `${BASE_URL}/v1/passenger?page=${this.offset}&size=${this.limit}`;

            list.get(url).then(({ data }) => {
                this.passengers = data.data;
                this.total = data.totalPassengers;
                console.log(data)
            });
        }

    },

}
</script>
<style  scoped>
.pagination {
    display: flex;
    justify-content: center;
    padding: 20px;
    background-color: gainsboro;
}

.Card1 {
    background-color: rgba(139, 216, 162, 0.596);
    max-width: 100%;
    min-height: 100%;
}

.Card2 {
    background-color: rgba(99, 122, 226, 0.671);
}

.Card3 {
    background-color: rgba(139, 86, 201, 0.644);
}

.Card4 {
    background-color: rgb(221, 219, 74);
}
</style>
    