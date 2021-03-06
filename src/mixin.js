export const Mixin =  {
    created:function(){
        this.set_sysConst()  
    },
    methods:{
        mtd(){
        console.log('mixin mtd')
        },
        set_sysConst(){
            this.sysConst={
                STORAGE_KEY_showId : 'key_show_id',
                STORAGE_KEY_tasksData : 'key_tasks_dat',
                STORAGE_KEY_flash : 'strage_flash_key',
                STORAGE_KEY_userData : 'key_user_dat',
                KEY_NEXT_ACTION : 'key_next_action',
                messagingSenderId: ' ',
                FCM_PublicVapidKey : " ",
                FCM_SERVER_KEY : " ",
                URL_BASE : 'http://localhost:8000',
                HTTP_URL : 'http://localhost:8080',
            }
        },
        /* local storage */
        set_exStorage(key, message){
            localStorage.setItem( key, JSON.stringify(message))
        },
        get_exStorage(key){
            var dat = JSON.parse(localStorage.getItem(key) || '[]')
//            console.log( 'dat.len='+ dat.length )
            return dat
        },
        remove_exStorage(key){
            localStorage.removeItem( key );
        },  
        /* user */
        check_userState(key, self){
            var store = this.get_exStorage(key)
            if( store.length >0){
                /* var user = store[0] */
                /* console.log(user.uid ) */
            }else{
                self.$router.push('/users/login')            
            }
        },
        valid_login(key){
            var ret = false;
            var store = this.get_exStorage(key)
            if( store.length >0){
                ret = true;
            }
            return ret;
        },
        get_userId(key ){
            var ret = '';
            var store = this.get_exStorage(key)
            if( store.length >0){
                var user = store[0]
                /* console.log(user.uid ) */
                ret = user.id
            }       
            return ret
        },
        
    }
}
