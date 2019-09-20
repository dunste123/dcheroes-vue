<template>
    <div class="box">
        <h3>Rate this hero</h3>
        <form @submit.prevent="submitForm" class="container frmRate">
            <fieldset>
                <div class="rate">
                    <input type="radio" id="rating10" name="rating" value="10"><label class="lblRating" for="rating10" title="5 stars"></label>
                    <input type="radio" id="rating9" name="rating" value="9"><label class="lblRating half" for="rating9" title="4 1/2 stars"></label>
                    <input type="radio" id="rating8" name="rating" value="8"><label class="lblRating" for="rating8" title="4 stars"></label>
                    <input type="radio" id="rating7" name="rating" value="7"><label class="lblRating half" for="rating7" title="3 1/2 stars"></label>
                    <input type="radio" id="rating6" name="rating" value="6"><label class="lblRating" for="rating6" title="3 stars"></label>
                    <input type="radio" id="rating5" name="rating" value="5"><label class="lblRating half" for="rating5" title="2 1/2 stars"></label>
                    <input type="radio" id="rating4" name="rating" value="4"><label class="lblRating" for="rating4" title="2 stars"></label>
                    <input type="radio" id="rating3" name="rating" value="3"><label class="lblRating half" for="rating3" title="1 1/2 stars"></label>
                    <input type="radio" id="rating2" name="rating" value="2"><label class="lblRating" for="rating2" title="1 star"></label>
                    <input type="radio" id="rating1" name="rating" value="1"><label class="lblRating half" for="rating1" title="1/2 star"></label>
                    <input type="radio" id="rating0" name="rating" value="0" checked=""><label class="lblRating" for="rating0" title="No star"></label>
                </div>
                <div class="clearfix"></div>
                <br>
                <div class="divSubmit">
                    <div class="row">
                        <div class="input-field col s12">
                            <textarea class="materialize-textarea" name="ratingReview" id="ratingReview" v-model="message" required></textarea>
                            <label for="ratingReview">Leave a message</label>
                        </div>
                    </div>
                    <input type="submit" name="submitRating" class="btn" value="Rate Hero">
                    <input type="hidden" name="heroId" value="1">
                </div>
            </fieldset>
        </form>
    </div>
</template>

<script>
    export default {
        name: 'RateBox',
        data: () => ({
            message: '',
        }),
        methods: {
            submitForm() {
                /*const ratingNumber = Array.from(document.querySelectorAll('input[name=rating]')).find((c) => c.checked);
                console.log(
                    this.message,
                    ratingNumber.value
                );*/
            },
        },
    };
</script>

<style lang="scss" scoped>
    @import "../assets/scss/stars";

    div.box {
        //
    }

    fieldset {
        position: relative;
    }

    textarea {
        width: 100%;
    }

</style>
