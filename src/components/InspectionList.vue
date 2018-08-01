<style scoped>
.padding{
	padding:10px;	
}

.bold {
	font-weight: bold;
}

.text-center {
	text-align: center;
}
</style>

<template>
	<Page class="page">
		<ListView v-for="l in listing" @loadMoreItems="onLoadMore">
			<v-template>
			    <CardView  class="padding"  margin="10" elevation="40" radius="1" @tap="onTap(l)">
		    		<GridLayout rows="auto" columns="30*, 70*" class="padding">
		    			<StackLayout>
		    				<Label :text="formatDate(l.slot_date)" class="text-center" textWrap="true"/>
		    				<Label :text="l.slot_time" class="bold text-center" />
		    				<Label :text="`(${l.status})`" class="text-center"/>
		    			</StackLayout>

		    			<StackLayout row="0" col="1">
		    				<Label :text="`(${l.real_name}) ${l.car}`" class="bold" textWrap="true"/>
		    				<Label :text="`Insp. Center: ${l.insp_loc}`" textWrap="true"/>
		    				<Label :text="`From: ${l.from_cat}`" textWrap="true" />
		    				<Label class="fa" >{{'fa-search' | fonticon}} {{ l.sell_name }}</Label> 
		    			</StackLayout>
	    			</GridLayout>
		    	</CardView>
			</v-template>
		</ListView>
	</Page>
</template>

<script>
import api from '../libs/api'
import {getString} from 'tns-core-modules/application-settings'
import {LoadingIndicator} from 'nativescript-loading-indicator'
import moment from 'moment'
import {mapActions, mapGetters, mapMutations} from 'vuex'

export default{
	props: {
		index: 0
	},
	data(){
		return {
			loader: new LoadingIndicator()
		}
	},
	mounted(){
		setTimeout( () => this.fetch(1), 500)
	},
	methods: {
		loading(){
			this.loader.show()
		},
		hideLoading(){
			this.loader.hide();
		},
		formatDate(date){
			return moment(date,'YYYY-MM-DD').format('MMM DD ddd')
		},
		onTap (l) {
			this.setLead(l)
			this.$router.push({name:'inspection-details'})
		},
		onLoadMore () {
			if(this.hasNextPage){
				this.fetch(this.nextPage)
			}
		},
		...mapActions('lead',[
			'fetch'
		]),
		...mapMutations('lead',[
			'setLead'
		])
	},
	computed: {
		userId () {
			return getString('user_id');
		},
		...mapGetters('lead',[
			'listing',
			'isFetching',
			'hasNextPage',
			'nextPage'
		])
	},
	watch: {
		index(val){
			if(val === 0) {
				this.fetch()
			}
		},
		isFetching(val) {
			if(val){
				this.loading()
			}else{
				this.hideLoading()
			}
		}
	}
}
</script>