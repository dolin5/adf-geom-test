(this["webpackJsonpadf-geom-test"]=this["webpackJsonpadf-geom-test"]||[]).push([[176],{938:function(e,r,t){"use strict";t.r(r);var a=t(2),i=t(3),n=t(4),o=t(5),c=t(0),s=t(1),l=(t(10),t(13),t(9),t(7)),u=t(6),p=t.n(u),b=t(11),y=t(12),f=t(57),O=t(646),j=t(252),v=t(685),d=t(72),B=(t(65),t(73)),g=t(19),m=t(8),h=t(25),P=t(37),k=t(647),A=t(56),S=t(41),R=t(89),w=t(92);function J(e){return e.features.map((function(r){var t=P.a.fromJSON(e.spatialReference),a=B.a.fromJSON(r);return Object(m.p)(a.geometry).spatialReference=t,a}))}function N(e){return e.features.map((function(r){return r.geometry.spatialReference=e.spatialReference,Object(A.a)(r.geometry)}))}var C=function(e){Object(n.a)(t,e);var r=Object(o.a)(t);function t(e){var i;return Object(a.a)(this,t),(i=r.call(this,e)).facilities=null,i.messages=null,i.pointBarriers=null,i.polylineBarriers=null,i.polygonBarriers=null,i.serviceAreaPolylines=null,i.serviceAreaPolygons=null,i}return Object(i.a)(t,[{key:"readFacilities",value:function(e){return N(e)}},{key:"readPointBarriers",value:function(e,r){return N(r.barriers)}},{key:"readPolylineBarriers",value:function(e){return N(e)}},{key:"readPolygonBarriers",value:function(e){return N(e)}},{key:"readIncidents",value:function(e,r){return J(r.saPolylines)}},{key:"readServiceAreaPolygons",value:function(e,r){return J(r.saPolygons)}}]),t}(g.a);Object(c.a)([Object(s.b)({type:[S.a]})],C.prototype,"facilities",void 0),Object(c.a)([Object(h.a)("facilities")],C.prototype,"readFacilities",null),Object(c.a)([Object(s.b)({type:[k.a]})],C.prototype,"messages",void 0),Object(c.a)([Object(s.b)({type:[S.a]})],C.prototype,"pointBarriers",void 0),Object(c.a)([Object(h.a)("pointBarriers",["barriers"])],C.prototype,"readPointBarriers",null),Object(c.a)([Object(s.b)({type:[R.a]})],C.prototype,"polylineBarriers",void 0),Object(c.a)([Object(h.a)("polylineBarriers")],C.prototype,"readPolylineBarriers",null),Object(c.a)([Object(s.b)({type:[w.a]})],C.prototype,"polygonBarriers",void 0),Object(c.a)([Object(h.a)("polygonBarriers")],C.prototype,"readPolygonBarriers",null),Object(c.a)([Object(s.b)({type:[B.a]})],C.prototype,"serviceAreaPolylines",void 0),Object(c.a)([Object(h.a)("serviceAreaPolylines",["saPolylines"])],C.prototype,"readIncidents",null),Object(c.a)([Object(s.b)({type:[B.a]})],C.prototype,"serviceAreaPolygons",void 0),Object(c.a)([Object(h.a)("serviceAreaPolygons",["saPolygons"])],C.prototype,"readServiceAreaPolygons",null);var q=C=Object(c.a)([Object(l.a)("esri.rest.support.ServiceAreaSolveResult")],C),F=Object(O.a)({accumulateAttributes:{name:"accumulateAttributeNames"},attributeParameterValues:!0,defaultBreaks:!0,facilities:!0,outSpatialReference:{name:"outSR",getter:function(e){return e.outSpatialReference.wkid}},pointBarriers:{name:"barriers"},polylineBarriers:!0,polygonBarriers:!0,restrictionAttributes:{name:"restrictionAttributeNames"},returnPointBarriers:{name:"returnBarriers"},travelMode:!0});function I(){return(I=Object(y.a)(p.a.mark((function e(r,t,a){var i,n,o,c,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=[],n=[],o={},c={},s=Object(d.c)(r),e.abrupt("return",(t.facilities&&t.facilities.features&&Object(v.a)(t.facilities.features,n,"facilities.features",o),t.pointBarriers&&t.pointBarriers.features&&Object(v.a)(t.pointBarriers.features,n,"pointBarriers.features",o),t.polylineBarriers&&t.polylineBarriers.features&&Object(v.a)(t.polylineBarriers.features,n,"polylineBarriers.features",o),t.polygonBarriers&&t.polygonBarriers.features&&Object(v.a)(t.polygonBarriers.features,n,"polygonBarriers.features",o),Object(j.a)(n).then((function(e){for(var r in o){var t=o[r];i.push(r),c[r]=e.slice(t[0],t[1])}return Object(v.e)(c,i)?Object(v.c)(s.path).catch((function(){return{dontCheck:!0}})):Promise.resolve({dontCheck:!0})})).then((function(e){("dontCheck"in e?e.dontCheck:e.hasZ)||Object(v.b)(c,i);var r=function(e){c[e].forEach((function(r,a){t.get(e)[a].geometry=r}))};for(var n in c)r(n);var o={query:Object(b.a)(Object(b.a)({},s.query),{},{f:"json"},F.toQueryParams(t))};return a&&(o=Object(b.a)(Object(b.a)({},a),o)),Object(f.default)("".concat(s.path,"/solveServiceArea"),o)})).then((function(e){return q.fromJSON(e.data)}))));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var x=function(e){Object(n.a)(t,e);var r=Object(o.a)(t);function t(e){var i;return Object(a.a)(this,t),(i=r.call(this,e)).url=null,i}return Object(i.a)(t,[{key:"solve",value:function(e,r){return function(e,r,t){return I.apply(this,arguments)}(this.url,e,r)}}]),t}(t(345).a);Object(c.a)([Object(s.b)()],x.prototype,"url",void 0);var E=x=Object(c.a)([Object(l.a)("esri.tasks.ServiceAreaTask")],x);r.default=E}}]);
//# sourceMappingURL=176.6dc6980e.chunk.js.map