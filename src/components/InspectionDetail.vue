<style scoped>
	.bold{
		font-weight: bold;
	}

	.details-container{
		background:white;
		padding:20px;
		border-bottom: 5px solid red;
	}

	.margin-top{
		margin-top: 5px;
	}

	.remarks-container{
		margin-top: 2px;
	}
</style>
<template>
	<Page class="page">
		<ActionBar class="action-bar" title="Customer Info">
			<NavigationButton text="Go Back" android.systemIcon="ic_menu_back" @tap="$router.go(-1)"/>
		</ActionBar>
		<ScrollView>
			<StackLayout>
				<GridLayout rows="auto" columns="35*, 65*" v-for="d in display" class="details-container">
					<Label :text="d.label" row="0" col="0" class="bold" textWrap="true"/>
					<Label :text="lead[d.key]" row="0" col="1" textWrap="true"/>
				</GridLayout>

				<StackLayout>
					<Label text="Remark History" class="bold details-container margin-top"></Label>
					<GridLayout rows="auto" columns="65*, 35*" v-for="r in remarks" class="details-container remarks-container">
						<Label :text="r.remarks" row="0" col="0" textWrap="true"/>
						<Label :text="r.remarks_edited_on" row="0" col="1" textWrap="true"/>
					</GridLayout>
				</StackLayout>
			</StackLayout>
		</ScrollView>
	</Page>
</template>

<script>
import api from '../libs/api'
import {mapActions, mapGetters} from 'vuex'

const display = [
	{
		label: 'Car Details',
		key: 'car'
	},
	{
		label: 'Name',
		key: 'sell_name',
	},
	{
		label: 'Tel. No',
		key: 'sell_tel'
	},
	{
		label: 'Email',
		key: 'sell_email'
	},
	{
		label: 'Price from V-tool',
		key: 'max_price'
	},
	{
		label: 'Price from Ops',
		key: 'offered_price_ops'
	},
	{
		label: 'Exp. Price',
		key: 'own_price'
	},
	{
		label: 'Inspection Address',
		key: 'location_address'
	},
	{
		label: 'PIC',
		key: 'person_incharge'
	}
]

export default {
	data () {
		return {
			display
		}
	},
	mounted () {
		this.fetchRemarks(this.lead.sell_id);
	},
	methods: {
		...mapActions('lead',[
			'fetchRemarks'
		])
	},
	computed: {
		...mapGetters('lead',[
			'lead','remarks'
		])
	}
}
</script>