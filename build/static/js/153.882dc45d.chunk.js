(this["webpackJsonpadf-geom-test"]=this["webpackJsonpadf-geom-test"]||[]).push([[153],{845:function(e,t,n){"use strict";n.r(t),n.d(t,"registerFunctions",(function(){return S}));var a=n(14),r=n(564),i=n(496),l=n(513),c=n(711),o=n(767),s=n(455),u=n(713),f=n(665),d=n(667),b=n(715),y=n(669),m=n(716),p=n(668),h=n(469),O=n(534),v=n(645),j=n(21),g=n(390),F=n(190),I=n(208);function E(e,t,n){var a=e.getVariables();if(a.length>0){for(var r=[],i=0;i<a.length;i++){var l={name:a[i]};r.push(t.evaluateIdentifier(n,l))}return Object(j.b)(r).then((function(t){for(var n={},r=0;r<a.length;r++)n[a[r]]=t[r];return e.parameters=n,e}))}return Object(j.t)(e)}function D(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(var a in e)if(a.toLowerCase()===t.toLowerCase())return e[a];return n}function w(e){if(null===e)return null;var t={type:D(e,"type",""),name:D(e,"name","")};if("range"===t.type)t.range=D(e,"range",[]);else{t.codedValues=[];var n,r=Object(a.a)(D(e,"codedValues",[]));try{for(r.s();!(n=r.n()).done;){var i=n.value;t.codedValues.push({name:D(i,"name",""),code:D(i,"code",null)})}}catch(l){r.e(l)}finally{r.f()}}return t}function x(e){if(null===e)return null;var t={},n=D(e,"wkt",null);null!==n&&(t.wkt=n);var a=D(e,"wkid",null);return null!==a&&(t.wkid=a),t}function A(e){if(null===e)return null;var t={hasZ:D(e,"hasz",!1),hasM:D(e,"hasm",!1)},n=D(e,"spatialreference",null);n&&(t.spatialReference=x(n));var a=D(e,"x",null);if(null!==a)return t.x=a,t.y=D(e,"y",null),t;var r=D(e,"rings",null);if(null!==r)return t.rings=r,t;var i=D(e,"paths",null);if(null!==i)return t.paths=i,t;var l=D(e,"points",null);if(null!==l)return t.points=l,t;for(var c=0,o=["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"];c<o.length;c++){var s=o[c],u=D(e,s,null);null!==u&&(t[s]=u)}return t}function N(e){return!!e.layerDefinition&&!!e.featureSet&&!1!==function(e,t){var n,r=Object(a.a)(t);try{for(r.s();!(n=r.n()).done;)if(n.value===e)return!0}catch(i){r.e(i)}finally{r.f()}return!1}(e.layerDefinition.geometryType,["","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&null!==e.layerDefinition.objectIdField&&""!==e.layerDefinition.objectIdField&&!1!==Object(s.u)(e.layerDefinition.fields)&&!1!==Object(s.u)(e.featureSet.features)}function S(e){"async"===e.mode&&(e.functions.getuser=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,a){Object(s.J)(a,1,2);var l=Object(s.c)(a[1],""),c=!0===l;if(l=!0===l||!1===l?"":Object(s.x)(l),a[0]instanceof r.a){var u=null;return t.services&&t.services.portal&&(u=t.services.portal),u=Object(o.getPortal)(a[0],u),Object(o.lookupUser)(u,l,c).then((function(e){if(e){for(var t=JSON.parse(JSON.stringify(e)),n=0,a=["lastLogin","created","modified"];n<a.length;n++){var r=a[n];void 0!==t[r]&&null!==t[r]&&(t[r]=new Date(t[r]))}return i.a.convertObjectToArcadeDictionary(t)}return null}))}var f=null;if(Object(s.K)(a[0])&&(f=a[0]),f)return c=!1,l?null:f.load().then((function(){return f.getOwningSystemUrl()})).then((function(e){if(!e)return l?null:f.getIdentityUser().then((function(e){return e?i.a.convertObjectToArcadeDictionary({username:e}):null}));var n=null;return t.services&&t.services.portal&&(n=t.services.portal),n=Object(o.getPortal)(new r.a(e),n),Object(o.lookupUser)(n,l,c).then((function(e){if(e){for(var t=JSON.parse(JSON.stringify(e)),n=0,a=["lastLogin","created","modified"];n<a.length;n++){var r=a[n];void 0!==t[r]&&null!==t[r]&&(t[r]=new Date(t[r]))}return i.a.convertObjectToArcadeDictionary(t)}return null}))}));throw new Error("Invalid Parameter")}))},e.signatures.push({name:"getuser",min:"1",max:"2"}),e.functions.featuresetbyid=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(Object(s.J)(n,2,4),n[0]instanceof c.a){var a=Object(s.x)(n[1]),r=Object(s.c)(n[2],null),i=Object(s.O)(Object(s.c)(n[3],!0));if(null===r&&(r=["*"]),!1===Object(s.u)(r))throw new Error("Invalid Parameter");return n[0].featureSetById(a,i,r)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"featuresetbyid",min:"2",max:"4"}),e.functions.featuresetbyportalitem=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,a){if(Object(s.J)(a,2,5),null===a[0])throw new Error("Portal is required");if(a[0]instanceof r.a){var i=Object(s.x)(a[1]),l=Object(s.x)(a[2]),c=Object(s.c)(a[3],null),u=Object(s.O)(Object(s.c)(a[4],!0));if(null===c&&(c=["*"]),!1===Object(s.u)(c))throw new Error("Invalid Parameter");var f=null;return t.services&&t.services.portal&&(f=t.services.portal),f=Object(o.getPortal)(a[0],f),Object(o.constructFeatureSetFromPortalItem)(i,l,t.spatialReference,c,u,f,t.lrucache,t.interceptor)}if(!1===Object(s.A)(a[0]))throw new Error("Portal is required");var d=Object(s.x)(a[0]),b=Object(s.x)(a[1]),y=Object(s.c)(a[2],null),m=Object(s.O)(Object(s.c)(a[3],!0));if(null===y&&(y=["*"]),!1===Object(s.u)(y))throw new Error("Invalid Parameter");if(t.services&&t.services.portal)return Object(o.constructFeatureSetFromPortalItem)(d,b,t.spatialReference,y,m,t.services.portal,t.lrucache,t.interceptor);throw new Error("Portal is required")}))},e.signatures.push({name:"featuresetbyportalitem",min:"2",max:"5"}),e.functions.featuresetbyname=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){if(Object(s.J)(n,2,4),n[0]instanceof c.a){var a=Object(s.x)(n[1]),r=Object(s.c)(n[2],null),i=Object(s.O)(Object(s.c)(n[3],!0));if(null===r&&(r=["*"]),!1===Object(s.u)(r))throw new Error("Invalid Parameter");return n[0].featureSetByName(a,i,r)}throw new Error("Invalid Parameter")}))},e.signatures.push({name:"featuresetbyname",min:"2",max:"4"}),e.functions.featureset=function(t,n){return e.standardFunction(t,n,(function(e,n,r){Object(s.J)(r,1,1);var l=r[0],c={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",fields:[]},featureSet:{geometryType:"",features:[]}};if(Object(s.A)(l))void 0!==(l=JSON.parse(l)).layerDefinition?(c.layerDefinition=l.layerDefinition,c.featureSet=l.featureSet,l.layerDefinition.spatialReference&&(c.layerDefinition.spatialReference=l.layerDefinition.spatialReference)):(c.featureSet.features=l.features,c.featureSet.geometryType=l.geometryType,c.layerDefinition.geometryType=c.featureSet.geometryType,c.layerDefinition.objectIdField=l.objectIdFieldName,c.layerDefinition.typeIdField=l.typeIdFieldName,c.layerDefinition.globalIdField=l.globalIdFieldName,c.layerDefinition.fields=l.fields,l.spatialReference&&(c.layerDefinition.spatialReference=l.spatialReference));else{if(!(r[0]instanceof i.a))throw new Error("Invalid Parameter");var o=D(l=JSON.parse(r[0].castToText()),"layerdefinition");if(null!==o){c.layerDefinition.geometryType=D(o,"geometrytype",""),c.featureSet.geometryType=c.layerDefinition.geometryType,c.layerDefinition.globalIdField=D(o,"globalidfield",""),c.layerDefinition.objectIdField=D(o,"objectidfield",""),c.layerDefinition.typeIdField=D(o,"typeidfield","");var u=D(o,"spatialreference",null);u&&(c.layerDefinition.spatialReference=x(u));var f,d=Object(a.a)(D(o,"fields",[]));try{for(d.s();!(f=d.n()).done;){var b=f.value,y={name:D(b,"name",""),alias:D(b,"alias",""),type:D(b,"type",""),nullable:D(b,"nullable",!0),editable:D(b,"editable",!0),length:D(b,"length",null),domain:w(D(b,"domain"))};c.layerDefinition.fields.push(y)}}catch(_){d.e(_)}finally{d.f()}var p=D(l,"featureset",null);if(p){var h,O={},v=Object(a.a)(c.layerDefinition.fields);try{for(v.s();!(h=v.n()).done;){var j=h.value;O[j.name.toLowerCase()]=j.name}}catch(_){v.e(_)}finally{v.f()}var g,F=Object(a.a)(D(p,"features",[]));try{for(F.s();!(g=F.n()).done;){var I=g.value,E={},S=D(I,"attributes",{});for(var T in S)E[O[T.toLowerCase()]]=S[T];c.featureSet.features.push({attributes:E,geometry:A(D(I,"geometry",null))})}}catch(_){F.e(_)}finally{F.f()}}}else{c.layerDefinition.geometryType=D(l,"geometrytype",""),c.featureSet.geometryType=c.layerDefinition.geometryType,c.layerDefinition.objectIdField=D(l,"objectidfieldname",""),c.layerDefinition.typeIdField=D(l,"typeidfieldname","");var L=D(l,"spatialreference",null);L&&(c.layerDefinition.spatialReference=x(L));var C,R=Object(a.a)(D(l,"fields",[]));try{for(R.s();!(C=R.n()).done;){var P=C.value,W={name:D(P,"name",""),alias:D(P,"alias",""),type:D(P,"type",""),nullable:D(P,"nullable",!0),editable:D(P,"editable",!0),length:D(P,"length",null),domain:w(D(P,"domain"))};c.layerDefinition.fields.push(W)}}catch(_){R.e(_)}finally{R.f()}var k,J={},M=Object(a.a)(c.layerDefinition.fields);try{for(M.s();!(k=M.n()).done;){var G=k.value;J[G.name.toLowerCase()]=G.name}}catch(_){M.e(_)}finally{M.f()}var B,V=Object(a.a)(D(l,"features",[]));try{for(V.s();!(B=V.n()).done;){var H=B.value,z={},K=D(H,"attributes",{});for(var U in K)z[J[U.toLowerCase()]]=K[U];c.featureSet.features.push({attributes:z,geometry:A(D(H,"geometry",null))})}}catch(_){V.e(_)}finally{V.f()}}}if(!1===N(c))throw new Error("Invalid Parameter");return m.a.create(c,t.spatialReference)}))},e.signatures.push({name:"featureset",min:"1",max:"1"}),e.functions.filter=function(t,n){return e.standardFunctionAsync(t,n,(function(n,a,r){return Object(s.J)(r,2,2),Object(s.K)(r[0])?r[0].load().then((function(n){var a=g.WhereClause.create(r[1],n.getFieldsIndex()),i=a.getVariables();if(i.length>0){for(var l=[],c=0;c<i.length;c++){var o={name:i[c]};l.push(e.evaluateIdentifier(t,o))}return Object(j.b)(l).then((function(e){for(var t={},n=0;n<i.length;n++)t[i[n]]=e[n];return a.parameters=t,new f.a({parentfeatureset:r[0],whereclause:a})}))}return Object(j.t)(new f.a({parentfeatureset:r[0],whereclause:a}))})):e.failDefferred("Filter cannot accept this parameter type")}))},e.signatures.push({name:"filter",min:"2",max:"2"}),e.functions.orderby=function(t,n){return e.standardFunctionAsync(t,n,(function(t,n,a){if(Object(s.J)(a,2,2),Object(s.K)(a[0])){var r=new p.a(a[1]);return Object(j.t)(new d.a({parentfeatureset:a[0],orderbyclause:r}))}return e.failDefferred("Order cannot accept this parameter type")}))},e.signatures.push({name:"orderby",min:"2",max:"2"}),e.functions.top=function(t,n){return e.standardFunctionAsync(t,n,(function(t,n,a){return Object(s.J)(a,2,2),Object(s.K)(a[0])?Object(j.t)(new b.a({parentfeatureset:a[0],topnum:a[1]})):Object(s.u)(a[0])?Object(s.N)(a[1])>=a[0].length?a[0].slice(0):a[0].slice(0,Object(s.N)(a[1])):Object(s.v)(a[0])?Object(s.N)(a[1])>=a[0].length()?a[0].slice(0):a[0].slice(0,Object(s.N)(a[1])):e.failDefferred("Top cannot accept this parameter type")}))},e.signatures.push({name:"top",min:"2",max:"2"}),e.functions.first=function(t,n){return e.standardFunctionAsync(t,n,(function(e,t,n){return Object(s.J)(n,1,1),Object(s.K)(n[0])?n[0].first(e.abortSignal).then((function(e){if(null!==e){var t=l.a.createFromGraphicLikeObject(e.geometry,e.attributes,n[0]);t._underlyingGraphic=e,e=t}return e})):Object(s.u)(n[0])?0===n[0].length?Object(j.t)(null):Object(j.t)(n[0][0]):Object(s.v)(n[0])?0===n[0].length()?Object(j.t)(null):Object(j.t)(n[0].get(0)):null}))},e.signatures.push({name:"first",min:"1",max:"1"}),e.functions.attachments=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,a){Object(s.J)(a,1,2);var r={minsize:-1,maxsize:-1,types:null};if(a.length>1)if(a[1]instanceof i.a){if(a[1].hasField("minsize")&&(r.minsize=Object(s.N)(a[1].field("minsize"))),a[1].hasField("maxsize")&&(r.maxsize=Object(s.N)(a[1].field("maxsize"))),a[1].hasField("types")){var c=Object(s.t)(a[1].field("types"),!1);c.length>0&&(r.types=c)}}else if(null!==a[1])throw new Error("Invalid Parameter");if(a[0]instanceof l.a){var u=a[0]._layer;return u instanceof F.default&&(u=Object(o.constructFeatureSet)(u,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===u||!1===Object(s.K)(u)?[]:u.load().then((function(){return u.queryAttachments(a[0].field(u.objectIdField),r.minsize,r.maxsize,r.types)}))}if(null===a[0])return[];throw new Error("Invalid Parameter")}))},e.signatures.push({name:"attachments",min:"1",max:"2"}),e.functions.featuresetbyrelationshipname=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,a){Object(s.J)(a,2,4);var r=a[0],i=Object(s.x)(a[1]),c=Object(s.c)(a[2],null),u=Object(s.O)(Object(s.c)(a[3],!0));if(null===c&&(c=["*"]),!1===Object(s.u)(c))throw new Error("Invalid Parameter");if(null===a[0])return null;if(!(a[0]instanceof l.a))throw new Error("Invalid Parameter");var f=r._layer;return f instanceof F.default&&(f=Object(o.constructFeatureSet)(f,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===f||!1===Object(s.K)(f)?null:f.load().then((function(e){var n=e.relationshipMetaData().filter((function(e){return e.name===i}));if(0===n.length)return null;if(void 0!==n[0].relationshipTableId&&null!==n[0].relationshipTableId&&n[0].relationshipTableId>-1)return Object(o.constructFeatureSetFromRelationship)(e,n[0],r.field(e.objectIdField),e.spatialReference,c,u,t.lrucache,t.interceptor);var a=e.serviceUrl();return a?(a="/"===a.charAt(a.length-1)?a+n[0].relatedTableId.toString():a+"/"+n[0].relatedTableId.toString(),Object(o.constructFeatureSetFromUrl)(a,e.spatialReference,c,u,t.lrucache,t.interceptor).then((function(t){return t.load().then((function(){return t.relationshipMetaData()})).then((function(a){if(a=a.filter((function(e){return e.id===n[0].id})),!1===r.hasField(n[0].keyField)||null===r.field(n[0].keyField))return e.getFeatureByObjectId(r.field(e.objectIdField),[n[0].keyField]).then((function(e){if(e){var r=g.WhereClause.create(a[0].keyField+"= @id",t.getFieldsIndex());return r.parameters={id:e.attributes[n[0].keyField]},t.filter(r)}return new y.a({parentfeatureset:t})}));var i=g.WhereClause.create(a[0].keyField+"= @id",t.getFieldsIndex());return i.parameters={id:r.field(n[0].keyField)},t.filter(i)}))}))):null}))}))},e.signatures.push({name:"featuresetbyrelationshipname",min:"2",max:"4"}),e.functions.featuresetbyassociation=function(t,n){return e.standardFunctionAsync(t,n,(function(e,n,r){Object(s.J)(r,2,3);var i=r[0],c=Object(s.x)(Object(s.c)(r[1],"")).toLowerCase(),f=Object(s.A)(r[2])?Object(s.x)(r[2]):null;if(null===r[0])return null;if(!(r[0]instanceof l.a))throw new Error("Invalid Parameter");var d=i._layer;return d instanceof F.default&&(d=Object(o.constructFeatureSet)(d,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===d||!1===Object(s.K)(d)?null:d.load().then((function(){var e=d.serviceUrl();return Object(o.constructAssociationMetaDataFeatureSetFromUrl)(e,t.spatialReference)})).then((function(e){var t=null,n=null,r=!1;if(null!==f&&""!==f&&void 0!==f){var l,o=Object(a.a)(e.terminals);try{for(o.s();!(l=o.n()).done;){var b=l.value;b.terminalName===f&&(n=b.terminalId)}}catch(z){o.e(z)}finally{o.f()}null===n&&(r=!0)}var y,m=e.associations.getFieldsIndex(),p=m.get("TOGLOBALID").name,O=m.get("FROMGLOBALID").name,v=m.get("TOTERMINALID").name,j=m.get("FROMTERMINALID").name,F=m.get("FROMNETWORKSOURCEID").name,E=m.get("TONETWORKSOURCEID").name,D=m.get("ASSOCIATIONTYPE").name,w=m.get("ISCONTENTVISIBLE").name,x=m.get("OBJECTID").name,A=Object(a.a)(d.fields);try{for(A.s();!(y=A.n()).done;){var N=y.value;if("global-id"===N.type){t=i.field(N.name);break}}}catch(z){A.e(z)}finally{A.f()}var S=null,T=new u.d(new I.a({name:"percentalong",alias:"percentalong",type:"double"}),g.WhereClause.create("0",e.associations.getFieldsIndex())),L=new u.d(new I.a({name:"side",alias:"side",type:"string"}),g.WhereClause.create("''",e.associations.getFieldsIndex())),C="globalid",R="globalId",P={};for(var W in e.lkp)P[W]=e.lkp[W].sourceId;var k=new u.e(new I.a({name:"classname",alias:"classname",type:"string"}),null,P),J="";switch(c){case"midspan":J="((".concat(p,"='").concat(t,"') OR ( ").concat(O,"='").concat(t,"')) AND (").concat(D," IN (5))"),k.codefield=g.WhereClause.create("CASE WHEN (".concat(p,"='").concat(t,"') THEN ").concat(F," ELSE ").concat(E," END"),e.associations.getFieldsIndex());var M=Object(h.c)(u.a.findField(e.associations.fields,O));M.name=C,M.alias=C,S=new u.d(M,g.WhereClause.create("CASE WHEN (".concat(O,"='").concat(t,"') THEN ").concat(p," ELSE ").concat(O," END"),e.associations.getFieldsIndex())),T=e.unVersion>=4?new u.c(u.a.findField(e.associations.fields,m.get("PERCENTALONG").name)):new u.d(new I.a({name:"percentalong",alias:"percentalong",type:"double"}),g.WhereClause.create("0",e.associations.getFieldsIndex()));break;case"junctionedge":J="((".concat(p,"='").concat(t,"') OR ( ").concat(O,"='").concat(t,"')) AND (").concat(D," IN (4,6))"),k.codefield=g.WhereClause.create("CASE WHEN (".concat(p,"='").concat(t,"') THEN ").concat(F," ELSE ").concat(E," END"),e.associations.getFieldsIndex());var G=Object(h.c)(u.a.findField(e.associations.fields,O));G.name=C,G.alias=C,S=new u.d(G,g.WhereClause.create("CASE WHEN (".concat(O,"='").concat(t,"') THEN ").concat(p," ELSE ").concat(O," END"),e.associations.getFieldsIndex())),L=new u.d(new I.a({name:"side",alias:"side",type:"string"}),g.WhereClause.create("CASE WHEN (".concat(D,"=4) THEN 'from' ELSE 'to' END"),e.associations.getFieldsIndex()));break;case"connected":var B="".concat(p,"='@T'"),V="".concat(O,"='@T'");null!==n&&(B+=" AND ".concat(v,"=@A"),V+=" AND ".concat(j,"=@A")),J="(("+B+") OR ("+V+"))",J=Object(s.l)(J,"@T",t),B=Object(s.l)(B,"@T",t),null!==n&&(B=Object(s.l)(B,"@A",n.toString()),J=Object(s.l)(J,"@A",n.toString())),k.codefield=g.WhereClause.create("CASE WHEN "+B+" THEN ".concat(F," ELSE ").concat(E," END"),e.associations.getFieldsIndex());var H=Object(h.c)(u.a.findField(e.associations.fields,O));H.name=C,H.alias=C,S=new u.d(H,g.WhereClause.create("CASE WHEN "+B+" THEN ".concat(O," ELSE ").concat(p," END"),e.associations.getFieldsIndex()));break;case"container":J="".concat(p,"='").concat(t,"' AND ").concat(D," = 2"),null!==n&&(J+=" AND ".concat(v," = ")+n.toString()),k.codefield=F,J="( "+J+" )",S=new u.b(u.a.findField(e.associations.fields,O),C,C);case"content":J="(".concat(O,"='").concat(t,"' AND ").concat(D," = 2)"),null!==n&&(J+=" AND ".concat(j," = ")+n.toString()),k.codefield=E,J="( "+J+" )",S=new u.b(u.a.findField(e.associations.fields,p),C,C);break;case"structure":J="(".concat(p,"='").concat(t,"' AND ").concat(D," = 3)"),null!==n&&(J+=" AND ".concat(v," = ")+n.toString()),k.codefield=F,J="( "+J+" )",S=new u.b(u.a.findField(e.associations.fields,O),C,R);break;case"attached":J="(".concat(O,"='").concat(t,"' AND ").concat(D," = 3)"),null!==n&&(J+=" AND ".concat(j," = ")+n.toString()),k.codefield=E,J="( "+J+" )",S=new u.b(u.a.findField(e.associations.fields,p),C,R);break;default:throw new Error("Invalid Parameter")}return r&&(J="1 <> 1"),new u.a({parentfeatureset:e.associations,adaptedFields:[new u.c(u.a.findField(e.associations.fields,x)),new u.c(u.a.findField(e.associations.fields,w)),S,L,k,T],extraFilter:J?g.WhereClause.create(J,e.associations.getFieldsIndex()):null})}))}))},e.signatures.push({name:"featuresetbyassociation",min:"2",max:"6"}),e.functions.groupby=function(t,n){return e.standardFunctionAsync(t,n,(function(n,r,l){return Object(s.J)(l,3,3),Object(s.K)(l[0])?l[0].load().then((function(n){var r=[],c=[],o=!1,u=[];if(Object(s.A)(l[1]))u.push(l[1]);else if(l[1]instanceof i.a)u.push(l[1]);else if(Object(s.u)(l[1]))u=l[1];else{if(!Object(s.v)(l[1]))return e.failDefferred("Illegal Value: GroupBy");u=l[1].toArray()}var f,d=Object(a.a)(u);try{for(d.s();!(f=d.n()).done;){var b=f.value;if(Object(s.A)(b)){var y=g.WhereClause.create(Object(s.x)(b),n.getFieldsIndex()),m=!0===Object(O.c)(y)?Object(s.x)(b):"%%%%FIELDNAME";r.push({name:m,expression:y}),"%%%%FIELDNAME"===m&&(o=!0)}else{if(!(b instanceof i.a))return e.failDefferred("Illegal Value: GroupBy");var p=b.hasField("name")?b.field("name"):"%%%%FIELDNAME",h=b.hasField("expression")?b.field("expression"):"";if("%%%%FIELDNAME"===p&&(o=!0),!p)return e.failDefferred("Illegal Value: GroupBy");r.push({name:p,expression:g.WhereClause.create(h||p,n.getFieldsIndex())})}}}catch(q){d.e(q)}finally{d.f()}if(u=[],Object(s.A)(l[2]))u.push(l[2]);else if(Object(s.u)(l[2]))u=l[2];else if(Object(s.v)(l[2]))u=l[2].toArray();else{if(!(l[2]instanceof i.a))return e.failDefferred("Illegal Value: GroupBy");u.push(l[2])}var v,F=Object(a.a)(u);try{for(F.s();!(v=F.n()).done;){var I=v.value;if(!(I instanceof i.a))return e.failDefferred("Illegal Value: GroupBy");var D=I.hasField("name")?I.field("name"):"",w=I.hasField("statistic")?I.field("statistic"):"",x=I.hasField("expression")?I.field("expression"):"";if(!D||!w||!x)return e.failDefferred("Illegal Value: GroupBy");c.push({name:D,statistic:w.toLowerCase(),expression:g.WhereClause.create(x,n.getFieldsIndex())})}}catch(q){F.e(q)}finally{F.f()}if(o){var A,N={},S=Object(a.a)(n.fields);try{for(S.s();!(A=S.n()).done;){N[A.value.name.toLowerCase()]=1}}catch(q){S.e(q)}finally{S.f()}var T,L=Object(a.a)(r);try{for(L.s();!(T=L.n()).done;){var C=T.value;"%%%%FIELDNAME"!==C.name&&(N[C.name.toLowerCase()]=1)}}catch(q){L.e(q)}finally{L.f()}var R,P=Object(a.a)(c);try{for(P.s();!(R=P.n()).done;){var W=R.value;"%%%%FIELDNAME"!==W.name&&(N[W.name.toLowerCase()]=1)}}catch(q){P.e(q)}finally{P.f()}var k,J=0,M=Object(a.a)(r);try{for(M.s();!(k=M.n()).done;){var G=k.value;if("%%%%FIELDNAME"===G.name){for(;1===N["field_"+J.toString()];)J++;N["field_"+J.toString()]=1,G.name="FIELD_"+J.toString()}}}catch(q){M.e(q)}finally{M.f()}}for(var B=[],V=0,H=r;V<H.length;V++){var z=H[V];B.push(E(z.expression,e,t))}for(var K=0,U=c;K<U.length;K++){var _=U[K];B.push(E(_.expression,e,t))}return B.length>0?Object(j.b)(B).then((function(){return Object(j.t)(l[0].groupby(r,c))})):Object(j.t)(l[0].groupby(r,c))})):e.failDefferred("Illegal Value: GroupBy")}))},e.signatures.push({name:"groupby",min:"3",max:"3"}),e.functions.distinct=function(t,n){return e.standardFunctionAsync(t,n,(function(n,r,l){return Object(s.K)(l[0])?(Object(s.J)(l,2,2),l[0].load().then((function(n){var r=[],c=[];if(Object(s.A)(l[1]))c.push(l[1]);else if(l[1]instanceof i.a)c.push(l[1]);else if(Object(s.u)(l[1]))c=l[1];else{if(!Object(s.v)(l[1]))return e.failDefferred("Illegal Value: GroupBy");c=l[1].toArray()}var o,u=!1,f=Object(a.a)(c);try{for(f.s();!(o=f.n()).done;){var d=o.value;if(Object(s.A)(d)){var b=g.WhereClause.create(Object(s.x)(d),n.getFieldsIndex()),y=!0===Object(O.c)(b)?Object(s.x)(d):"%%%%FIELDNAME";r.push({name:y,expression:b}),"%%%%FIELDNAME"===y&&(u=!0)}else{if(!(d instanceof i.a))return e.failDefferred("Illegal Value: GroupBy");var m=d.hasField("name")?d.field("name"):"%%%%FIELDNAME",p=d.hasField("expression")?d.field("expression"):"";if("%%%%FIELDNAME"===m&&(u=!0),!m)return e.failDefferred("Illegal Value: GroupBy");r.push({name:m,expression:g.WhereClause.create(p||m,n.getFieldsIndex())})}}}catch(P){f.e(P)}finally{f.f()}if(u){var h,v={},F=Object(a.a)(n.fields);try{for(F.s();!(h=F.n()).done;){v[h.value.name.toLowerCase()]=1}}catch(P){F.e(P)}finally{F.f()}var I,D=Object(a.a)(r);try{for(D.s();!(I=D.n()).done;){var w=I.value;"%%%%FIELDNAME"!==w.name&&(v[w.name.toLowerCase()]=1)}}catch(P){D.e(P)}finally{D.f()}var x,A=0,N=Object(a.a)(r);try{for(N.s();!(x=N.n()).done;){var S=x.value;if("%%%%FIELDNAME"===S.name){for(;1===v["field_"+A.toString()];)A++;v["field_"+A.toString()]=1,S.name="FIELD_"+A.toString()}}}catch(P){N.e(P)}finally{N.f()}}for(var T=[],L=0,C=r;L<C.length;L++){var R=C[L];T.push(E(R.expression,e,t))}return T.length>0?Object(j.b)(T).then((function(){return Object(j.t)(l[0].groupby(r,[]))})):Object(j.t)(l[0].groupby(r,[]))}))):function(e,t,n,a){if(1===a.length){if(Object(s.u)(a[0]))return Object(v.a)(e,a[0],-1);if(Object(s.v)(a[0]))return Object(v.a)(e,a[0].toArray(),-1)}return Object(v.a)(e,a,-1)}("distinct",0,0,l)}))})}}}]);
//# sourceMappingURL=153.882dc45d.chunk.js.map