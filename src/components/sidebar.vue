<template>
	<div class="sidebar-container">
		<div class="sidebar-header"><span class="highlight">CSS</span> Technique</div>
		<div class="sidebar-body">
			<ul class="main">
				<li v-on:click="toggle('layout')" v-bind:class="{ active: menu === 'layout' }">
					<i class="fa fa-hand-rock-o" aria-hidden="true"></i> Layout
					<ul class="sub">
						<li>Box Modal</li>
						<li>Box Sizing</li>
						<li>Position</li>
						<li>Display</li>
						<li>Float</li>
						<li>Overflow</li>
						<li>Flexbox</li>
					</ul>
				</li>
				<li v-on:click="toggle('sizing')" v-bind:class="{ active: menu === 'sizing' }">
					<i class="fa fa-hand-rock-o" aria-hidden="true"></i> Sizing
					<ul class="sub">
						<li>Unit</li>
						<li>Font Size</li>
					</ul>
				</li>
				<li v-on:click="toggle('animation')" v-bind:class="{ active: menu === 'animation' }">
					<i class="fa fa-hand-rock-o" aria-hidden="true"></i> Transform & Animation
					<ul class="sub">
						<li>Transfrom</li>
						<li>Animation</li>
						<li>Transition</li>
						<li>Key Frames</li>
					</ul>
				</li>
				<li v-on:click="toggle('technique')" v-bind:class="{ active: menu === 'technique' }"><i class="fa fa-hand-rock-o" aria-hidden="true"></i> Technique

						<ul class="sub">
							<li>Font-size</li>
							<li>Autoprefixer</li>
							<li>Prevent Old Browser</li>
							<li>After & Before</li>
						</ul>
					</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				menu: ""
			}
		},
		methods: {
			toggle: function(menu) {
				if(this.menu == menu) {
					this.menu = '';
				} else {
					this.menu = menu;
				}
			}
		}
	}
</script>

<style lang="sass">
	.sidebar-container {
		position: fixed;
		left: 0;
		top: 0;
		width: 280px;
		height: 100%;
		background-color: #1C1E2A;
		box-shadow: 0 1px 2px #EEE;
		overflow: hidden;

		.sidebar-header {
			padding: 1.5em;
			background-color: #1C1E2A;
			border-bottom: 1px solid rgba(#FFF, 0.05);
			color: #FFF;
			height: 150px;
			display: flex;
			flex-direction: column;
			justify-content: center;
			position: relative;
			z-index: 1000;

			.highlight {
				color: #2EC4B6;
				font-weight: 500;
				font-size: 1.6em;
				display: block;
			}
		}

		.sidebar-body {

			ul.main {
				list-style: none;
				padding: 0;
				margin: 0;

				& > li {
					padding: 1.5em;
					text-align: center;
					border-bottom: 1px solid rgba(#FFF, 0.05);
					display: flex;
					align-items: center;
					color: #FFF;
					border-left: 2px solid transparent;
					height: 60px;
					 & > i {
						width: 40px;
						text-align: left;
						font-size: 1.6em;
					}

					&:hover, &.active {
						background-color: #2D303E;
						cursor: pointer;
						color: #2EC4B6;
						border-left: 2px solid #2EC4B6;
					}

					&.active {
						ul.sub {
							right: 0;
						}
					}
				}

				ul.sub {
					position: absolute;
					right: -220px;
					top: 0;
					width: 220px;
					height: 100%;
					background-color: #2D303E;
					padding: 0 15px;
					padding-top: 160px;
					z-index: 999;
					transition: all 0.3s ease;
					list-style-type: none;
					margin: 0;

					& > li {
						text-align: left;
						padding: 1.5em;
						text-align: center;
						border-bottom: 1px solid rgba(#000, 0.1);
						display: flex;
						align-items: center;
						color: #FFF;
						border-left: 2px solid transparent;
						height: 50px;

						&:hover {
							color: #2EC4B6;
						}
					}
				}
			}
		}
	}
</style>