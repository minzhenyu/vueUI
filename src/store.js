// store.js h5使用缓存代码 
export default{
    fetch(STORAGE_KEY){
        return JSON.parse(window.localStorage.getItem(STORAGE_KEY)||'[]')
    },
    save(STORAGE_KEY,items){
        window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items))
    },
	remove(STORAGE_KEY){
		window.localStorage.removeItem(STORAGE_KEY)
	}
}
