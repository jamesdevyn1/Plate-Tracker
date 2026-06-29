self.addEventListener('install', function(e){ self.skipWaiting(); });
self.addEventListener('activate', function(e){
  e.waitUntil((async function(){
    try { const ks = await caches.keys(); await Promise.all(ks.map(function(k){ return caches.delete(k); })); } catch(_){}
    try { await self.registration.unregister(); } catch(_){}
    try { const cs = await self.clients.matchAll(); cs.forEach(function(c){ c.navigate(c.url); }); } catch(_){}
  })());
});
