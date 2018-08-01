import api from '../../libs/api'

const state = {
	listing: [],
	isFetching: false,
	lead: null,
	remarks: [],
	page: 1,
	totalPage: 1
}

const actions = {
	fetch ({commit}, page) {
		commit('setFetching',true)

		api.post(`/inspector_app/inspector_app_v2_4_4/inspections/2018-01-01%20-%202019-01-01/170174/${page}`,{"user_id":"170174","user_name":"ming_cms","home_search":null,"phone_number":""})
			.then( ({data}) => {
				if(page === 1) {
					commit('setListing',data.listing);
				}else {
					commit('pushListing',data.listing)
				}

				commit('setFetching',false)
				commit('setPage',data.curPage)
				commit('setTotalPage',data.total_page)
			})
	},
	fetchRemarks({commit}, sellId) {
		api.get(`/inspector_app/inspector_app_v2_4_4/inspectionnewremarks/${sellId}`)
			.then( ({data}) => {
				commit('setRemarks',data.remarks)
			})
	}
}


const mutations = {
	setListing (state,listing) {
		state.listing = listing
	},
	pushListing (state, listing) {
		state.listing = state.listing.concat(listing)
	},
	setFetching (state, flag) {
		state.isFetching = flag;
	},
	setLead (state, lead) {
		state.lead = lead;
	},
	setRemarks (state, remarks) {
		state.remarks = remarks
	},
	setPage (state, page){
		state.page = parseInt(page)
	},
	setTotalPage (state, total) {
		state.totalPage = total
	}
}

const getters = {
	listing (state) {
		return state.listing
	},
	isFetching (state) {
		return state.isFetching
	},
	lead (state) {
		return state.lead
	},
	remarks (state) {
		return state.remarks
	},
	hasNextPage (state) {
		return state.page < state.totalPage
	},
	nextPage () {
		return state.page + 1
	}
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};