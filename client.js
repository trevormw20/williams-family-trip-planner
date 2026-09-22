export async function connect(role){
 const config=await fetch(new URL('./sync-config.json',import.meta.url),{cache:'no-store'}).then(r=>r.json());
 if(!config.api)throw Error('Shared saving is not connected yet.');
 let token=sessionStorage.getItem('trip-session-'+role)||'';
 async function api(path,options={}){const response=await fetch(config.api+path,{...options,headers:{'Content-Type':'application/json',...(token?{Authorization:'Bearer '+token}:{}),...options.headers}});const data=await response.json();if(!response.ok){if(response.status===401)sessionStorage.removeItem('trip-session-'+role);throw Object.assign(Error(data.error||'Unable to save'),{status:response.status})}return data}
 async function login(code){const result=await api('/session',{method:'POST',body:JSON.stringify({role,code})});token=result.token;sessionStorage.setItem('trip-session-'+role,token)}
 const key=new URLSearchParams(location.hash.slice(1)).get('access');
 if(key){await login(key);history.replaceState(null,'',location.pathname+location.search)}
 return {api,login,get authenticated(){return !!token},logout(){sessionStorage.removeItem('trip-session-'+role);location.reload()}};
}
