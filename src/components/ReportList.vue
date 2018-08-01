<template>
	<Page class="page">
		<ActionBar class="action-bar" title="Counter">
		  	<NavigationButton text="Back" android.systemIcon="ic_menu_back" @tap="$router.go(-1)"/>
		</ActionBar>
		<StackLayout row="0" col="1">
			<Label text="hello" />
		</StackLayout>
	</Page>
</template>

<script>
export default{
	mounted(){
		console.log('report list mounted')
	}
}
</script>