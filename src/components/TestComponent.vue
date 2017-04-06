<template>
    <ol type="1">
        <li v-for="(category, index) in categories">
            {{index + 1}}. {{category.name}}
            <ul>
                <li v-for="sub in category.sub">{{sub}}</li>
            </ul>
        </li>
    </ol>
</template>
<script>
	export default {
		data() {
			return {
				categories: [
					{name: 'JavaScript', sub: ['Vue', 'React', 'Angular']},
					{name: 'Databases', sub: ['MySql', 'PostgreSQL', 'MongoDB']},
					{name: 'Operating systems', sub: ['MacOS', 'Linux', 'Windows']}
				]
			}
		}
	}
</script>

