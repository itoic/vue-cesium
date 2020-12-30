define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Cartesian2-44433f55","./Transforms-a6071fdb","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./GeometryAttribute-d239a979","./GeometryAttributes-90846c5f","./AttributeCompression-170b3be0","./GeometryPipeline-ab464aa2","./EncodedCartesian3-e9d8b15b","./IndexDatatype-66caba23","./IntersectionTests-5912ffe9","./Plane-b2b7f933","./VertexFormat-cc24f342","./arrayRemoveDuplicates-b817241d","./BoundingRectangle-8fc0b17b","./EllipsoidTangentPlane-ddc73ae7","./EllipsoidRhumbLine-862a2df4","./PolygonPipeline-c1b472a6","./PolylineVolumeGeometryLibrary-68709131","./EllipsoidGeodesic-7779e55a","./PolylinePipeline-919c0ec0"],function(c,e,i,u,G,t,n,A,R,D,r,I,a,O,o,l,g,s,p,d,y,S,m,h,f){"use strict";var b={};function B(e,t){c.defined(b[e])||(b[e]=!0,console.warn(c.defaultValue(t,e)))}function v(e){var t=(e=c.defaultValue(e,c.defaultValue.EMPTY_OBJECT)).polylinePositions,n=e.shapePositions;this._positions=t,this._shape=n,this._ellipsoid=u.Ellipsoid.clone(c.defaultValue(e.ellipsoid,u.Ellipsoid.WGS84)),this._cornerType=c.defaultValue(e.cornerType,m.CornerType.ROUNDED),this._vertexFormat=g.VertexFormat.clone(c.defaultValue(e.vertexFormat,g.VertexFormat.DEFAULT)),this._granularity=c.defaultValue(e.granularity,i.CesiumMath.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry";t=1+t.length*u.Cartesian3.packedLength;t+=1+n.length*u.Cartesian2.packedLength,this.packedLength=t+u.Ellipsoid.packedLength+g.VertexFormat.packedLength+2}B.geometryOutlines="Entity geometry outlines are unsupported on terrain. Outlines will be disabled. To enable outlines, disable geometry terrain clamping by explicitly setting height to 0.",B.geometryZIndex="Entity geometry with zIndex are unsupported when height or extrudedHeight are defined.  zIndex will be ignored",B.geometryHeightReference="Entity corridor, ellipse, polygon or rectangle with heightReference must also have a defined height.  heightReference will be ignored",B.geometryExtrudedHeightReference="Entity corridor, ellipse, polygon or rectangle with extrudedHeightReference must also have a defined extrudedHeight.  extrudedHeightReference will be ignored",v.pack=function(e,t,n){var i;n=c.defaultValue(n,0);var r=e._positions,a=r.length;for(t[n++]=a,i=0;i<a;++i,n+=u.Cartesian3.packedLength)u.Cartesian3.pack(r[i],t,n);var o=e._shape,a=o.length;for(t[n++]=a,i=0;i<a;++i,n+=u.Cartesian2.packedLength)u.Cartesian2.pack(o[i],t,n);return u.Ellipsoid.pack(e._ellipsoid,t,n),n+=u.Ellipsoid.packedLength,g.VertexFormat.pack(e._vertexFormat,t,n),n+=g.VertexFormat.packedLength,t[n++]=e._cornerType,t[n]=e._granularity,t};var E=u.Ellipsoid.clone(u.Ellipsoid.UNIT_SPHERE),P=new g.VertexFormat,_={polylinePositions:void 0,shapePositions:void 0,ellipsoid:E,vertexFormat:P,cornerType:void 0,granularity:void 0};v.unpack=function(e,t,n){t=c.defaultValue(t,0);for(var i=e[t++],r=new Array(i),a=0;a<i;++a,t+=u.Cartesian3.packedLength)r[a]=u.Cartesian3.unpack(e,t);i=e[t++];var o=new Array(i);for(a=0;a<i;++a,t+=u.Cartesian2.packedLength)o[a]=u.Cartesian2.unpack(e,t);var l=u.Ellipsoid.unpack(e,t,E);t+=u.Ellipsoid.packedLength;var s=g.VertexFormat.unpack(e,t,P);t+=g.VertexFormat.packedLength;var p=e[t++],d=e[t];return c.defined(n)?(n._positions=r,n._shape=o,n._ellipsoid=u.Ellipsoid.clone(l,n._ellipsoid),n._vertexFormat=g.VertexFormat.clone(s,n._vertexFormat),n._cornerType=p,n._granularity=d,n):(_.polylinePositions=r,_.shapePositions=o,_.cornerType=p,_.granularity=d,new v(_))};var x=new p.BoundingRectangle;return v.createGeometry=function(e){var t=e._positions,n=s.arrayRemoveDuplicates(t,u.Cartesian3.equalsEpsilon),i=e._shape,i=m.PolylineVolumeGeometryLibrary.removeDuplicatesFromShape(i);if(!(n.length<2||i.length<3)){S.PolygonPipeline.computeWindingOrder2D(i)===S.WindingOrder.CLOCKWISE&&i.reverse();t=p.BoundingRectangle.fromPoints(i,x);return function(e,t,n,i){var r=new D.GeometryAttributes;i.position&&(r.position=new R.GeometryAttribute({componentDatatype:A.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:e}));var a,o,l,s,p,d=t.length,c=e.length/3,u=(c-2*d)/(2*d),g=S.PolygonPipeline.triangulate(t),y=(u-1)*d*6+2*g.length,m=O.IndexDatatype.createTypedArray(c,y),h=2*d,f=0;for(C=0;C<u-1;C++){for(a=0;a<d-1;a++)p=(o=2*a+C*d*2)+h,s=(l=o+1)+h,m[f++]=l,m[f++]=o,m[f++]=s,m[f++]=s,m[f++]=o,m[f++]=p;s=(l=(o=2*d-2+C*d*2)+1)+h,p=o+h,m[f++]=l,m[f++]=o,m[f++]=s,m[f++]=s,m[f++]=o,m[f++]=p}if(i.st||i.tangent||i.bitangent){for(var b,v,E=new Float32Array(2*c),P=1/(u-1),_=1/n.height,x=n.height/2,k=0,C=0;C<u;C++){for(b=C*P,v=_*(t[0].y+x),E[k++]=b,E[k++]=v,a=1;a<d;a++)v=_*(t[a].y+x),E[k++]=b,E[k++]=v,E[k++]=b,E[k++]=v;v=_*(t[0].y+x),E[k++]=b,E[k++]=v}for(a=0;a<d;a++)b=0,v=_*(t[a].y+x),E[k++]=b,E[k++]=v;for(a=0;a<d;a++)b=(u-1)*P,v=_*(t[a].y+x),E[k++]=b,E[k++]=v;r.st=new R.GeometryAttribute({componentDatatype:A.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(E)})}var V=c-2*d;for(C=0;C<g.length;C+=3){var L=g[C]+V,w=g[C+1]+V,F=g[C+2]+V;m[f++]=L,m[f++]=w,m[f++]=F,m[f++]=F+d,m[f++]=w+d,m[f++]=L+d}var T=new R.Geometry({attributes:r,indices:m,boundingSphere:G.BoundingSphere.fromVertices(e),primitiveType:R.PrimitiveType.TRIANGLES});if(i.normal&&(T=I.GeometryPipeline.computeNormal(T)),i.tangent||i.bitangent){try{T=I.GeometryPipeline.computeTangentAndBitangent(T)}catch(e){B("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}i.tangent||(T.attributes.tangent=void 0),i.bitangent||(T.attributes.bitangent=void 0),i.st||(T.attributes.st=void 0)}return T}(m.PolylineVolumeGeometryLibrary.computePositions(n,i,t,e,!0),i,t,e._vertexFormat)}},function(e,t){return c.defined(t)&&(e=v.unpack(e,t)),e._ellipsoid=u.Ellipsoid.clone(e._ellipsoid),v.createGeometry(e)}});
