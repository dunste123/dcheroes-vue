<template>
    <div class="row">
        <div class="col s12">
            <div class="card-panel">
                <span class="card-title"><strong>Anonymous: </strong></span>
                <p>{{ comment }}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Comment',
        props: {
            comment: {
                type: String,
                required: true,
            },
        },
    };
</script>
