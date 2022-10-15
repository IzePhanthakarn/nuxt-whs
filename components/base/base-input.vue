<template>
    <div class="w-full">
        <label class="label text-default block mb-px" :class="labelClass">{{label}}</label>
        <input class="input w-full px-2 py-1 text-base font-medium rounded-md" :type="type" :placeholder="placeholder" :name="name" :disabled="disabled"
            @keypress="isNumber($event)" :maxlength="maxLength">
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        },
        innerClass: {
            type: [String, Object],
            default: ''
        },
        label: {
            type: String,
            default: ''
        },
        labelClass: {
            type: String,
            default: ''
        },
        type: {
            type: String,
            default: 'text',
            validator(value) {
                return [
                    'date',
                    'datetime-local',
                    'email',
                    'month',
                    'number',
                    'password',
                    'text',
                    'date',
                    'phone',
                    'cid',
                    'trading',
                    'time',
                    'week'
                ].includes(value)
            }
        },
        placeholder: {
            type: String,
            default: '',
        },
        disabled: {
            type: Boolean,
            default: false,
        }
    },
    computed: {
        maxLength() {
            const self = this

            let max = null
            if (self.type === 'phone') max = 10
            else if (self.type === 'cid') max = 13
            else if (self.type === 'trading') max = 5

            return max
        }
    },
    methods: {
        isNumber(evt) {
            evt = evt ? evt : window.event
            var charCode = evt.which ? evt.which : evt.keyCode
            if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) &&
                charCode !== 46 &&
                this.type == 'phone'
            ) {
                evt.preventDefault()
            } else if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) &&
                charCode !== 46 &&
                this.type == 'cid'
            ) {
            } else if (
                charCode > 31 &&
                (charCode < 48 || charCode > 57) &&
                charCode !== 46 &&
                this.type == 'trading'
            ) {
                evt.preventDefault()
            } else {
                return true
            }
        },
    },
}
</script>

<style scoped>
.input {
    border: 2px solid transparent;
    transition: border-color .2s cubic-bezier(.25, .01, .25, 1) 0s, color .2s cubic-bezier(.25, .01, .25, 1) 0s, background .2s cubic-bezier(.25, .01, .25, 1) 0s;
}

.input:hover,
.input:focus{
    outline: none;
    border-color: #05060f;
    /* border-color: var(--default); */
    color: #000;
}
</style>