<style scoped>
.text {
	color:white;
	placeholder-color:#bdbdbd;
}
</style>

<template>
	<Page class="page" @loaded="onLoaded">
	    <ActionBar class="action-bar" title="Login"/>

	    <StackLayout>
		    <TextField class="text" hint="Username" v-model="username"/>
		    <TextField class="text" hint="Password" v-model="password" :secure="true"/>

		    <Button text="Login" @tap="login" />
	    </StackLayout>
	</Page>
</template>

<script>
import api from '../libs/api'
import {getString, setString} from 'tns-core-modules/application-settings'
import qs from 'qs';

export default{
	data(){
		return {
			username: null,
			password: null
		}
	}, 
	methods:{
		onLoaded () { 
			console.log('loaded')
			console.log('wtf')
			console.log(getString('token'))
		},
		login(){
			console.log('login')
			api.post('do_login_app/do_login_app_v2/login',qs.stringify({
				username: this.username,
				pass: this.password,
				version: '1.2.1'
			}))
			.then( ({data}) => {
				console.log(data)
				if(!data.success){
					alert(data.error_text);
					return false;
				}
				setString('token',data.auth_token);
				setString('email',data.login_res[0].email);
				setString('user_id',data.login_res[0].user_id);
				setString('user_name',data.login_res[0].user_name);
				this.$router.push('/main')
			})
		}
	}
}
</script>