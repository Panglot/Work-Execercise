<template>
    <div id="app">
        <img src="./assets/logo.png">
        <h1>{{msg}}{{someText}}</h1>
        <ul v-if="appear" v-bind:title="testTitle">
            <li v-for="element in array">
                {{element.text}}

            </li>
        </ul>
        <button v-on:click="toggle">Toggle list</button>
        <br>
        <input v-model="linkedText">
        <span>{{onlyNumbers()}}</span><br>
        <input type="text" v-on:keyup="output1 = $event.target.value">
        <span>Output: {{output1}} </span><br>
        <input type="text" v-on:keyup.ctrl.enter="output2 = $event.target.value">
        <span>Output: {{output2}} </span><br>
        <form action="">
            <input type="submit" v-on:click.prevent value="Submit">
        </form>
        <p v-if="items > 4">{{ items }} items in stock.</p>
        <p v-else-if="items>0">Hurry up there are just a few items in stock!</p>
        <p v-else-if="items===0">We are out of items!</p>
        <p v-else>Strange, how can there be negative number of items?</p>
        <template v-if="items>=10">
            <p>Special offer!!!</p>
            <p>20% off since we have too much items.</p>
        </template>
        <button v-on:click="decreaseItems">( - )</button>
        <button v-on:click="increaseItems">( + )</button>
        <br><br>
        <div v-show="!ninjaHidden">
            <pre class="nospaces"> <====|=(|) _          </pre>
            <pre class="nospaces">         \\( )         </pre>
            <pre class="nospaces">          [ - ]        </pre>
            <pre class="nospaces">           |_| \\      </pre>
            <pre class="nospaces">          // \\(|)     </pre>
            <pre class="nospaces">          \\  \\       </pre>
            <pre class="nospaces">           U   U       </pre>
        </div>
        <button v-on:click = "ninjaHidden=!ninjaHidden">There is a hiding ninja somewhere around here. Click to reveal it. </button>
        <ul>
            <li v-for="(element, index) in secondArray">{{element}} at index {{index}}</li>
        </ul>

        <test></test>
    </div>
</template>

<script>
	import TestComponent from './components/TestComponent.vue';

	export default {
		name: 'app',
		data () {
			return {
				msg: 'Lets test Vue. Lets combine',
				someText: ' some text.',
				array: [
					{text: "element 1"},
					{text: "element 2"},
					{text: "element 3"},
					{text: "element 4"}

				],
				testTitle: 'Popup title',
				appear: true,
				linkedText: "This text is linked",
				output1: '',
				output2: '',
				items: 6,
                ninjaHidden: true,
                secondArray:[
                	'One', 'Two', 'Three', 'Four'
                ]
			}
		},
		methods: {
			toggle: function () {
				if (this.appear) {
					this.appear = false;
				}
				else {
					this.appear = true;
				}
			},
			onlyNumbers: function () {
				var isNumber = /^\d+$/.test(this.linkedText);
				if (isNumber) {
					return "This is not text. These are only numbers.";
				}
				else {
					return this.linkedText;
				}
			},
			increaseItems: function () {
				this.items++;
			},
			decreaseItems: function () {
				this.items--;
			}
		},
		components: {
			test: TestComponent
		}
	};

</script>

<style lang="scss">
    body{
        background-color: #FFF9B9;
    }
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }

    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
    .nospaces{
        padding:0;
        margin:0;
        font-weight: bold;
    }
</style>
