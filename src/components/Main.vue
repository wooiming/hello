<style scoped>
.padding{
	padding:10px;	
}

.bold {
	font-weight: bold;
}
</style>

<template>
	<Page class="page">
	    <ActionBar class="action-bar" title="Carsome"/>
	    <TabView  @tabChange="onTabChange">
		    <TabViewItem title="Home">
		        <inspection-list :index="tabIndex"></inspection-list>
		    </TabViewItem>
		    <TabViewItem title="Report">
		        <report-list></report-list>
		    </TabViewItem>
	    </TabView>
	</Page>
</template>

<script>
import InspectionList from './InspectionList'
import ReportList from './ReportList'

export default{
	data() {
		return {
			tabIndex: 0
		}
	},
	methods: {
		onTabChange (e) {
			this.tabIndex = e
		}
	},
	components:{
		InspectionList,
		ReportList
	}
}
</script>