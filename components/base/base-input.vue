<template>
    <div class="w-full">
        <label class="label text-default block mb-px font-medium" :class="labelClass">{{label}}</label>
        <form action="" class="form">
            <input class="input w-full px-3 py-2 text-base font-medium rounded-md" :type="type"
                :placeholder="placeholder" :name="name" :disabled="disabled" @keypress="isNumber($event)"
                :maxlength="maxLength">
            <button class="reset" type="reset">
                <base-icon icon="x"></base-icon>
            </button>
        </form>
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
    /* border: 2px solid transparent; */
    border: none;
    border: none;
    color: #000;
    transition: border-color .2s cubic-bezier(.25, .01, .25, 1) 0s, color .2s cubic-bezier(.25, .01, .25, 1) 0s, background .2s cubic-bezier(.25, .01, .25, 1) 0s;
}

/* .input:hover,
.input:focus {
    outline: none;
    border-color: #05060f;
    border-color: var(--default);
    color: #000;
} */
.form button {
    border: none;
    background: none;
    color: #8b8ba7;
}

.form {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    transition: border-radius 0.5s ease;
    background: #fff;
    border-radius: 5px;
}
.form:before {
    content: "";
    position: absolute;
    background: crimson;
    transform: scaleX(0);
    transform-origin: center;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 0;
    border-radius: 1px;
    transition: transform 0.3s ease;
}

.form:focus-within {
    border-radius: 2px;
}

input:focus {
    outline: none;
}

.form:focus-within:before {
    transform: scale(1);
}
.reset {
    border: none;
    background: none;
    opacity: 0;
    visibility: hidden;
}

/* close button shown when typing */
input:not(:placeholder-shown)~.reset {
    opacity: 1;
    visibility: visible;
}

/* sizing svg icons */
.form svg {
    width: 20px;
    margin-right: 12px;
    /* margin-top: 1px; */
}
</style>