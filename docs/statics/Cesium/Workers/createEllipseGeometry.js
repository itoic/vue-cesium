define(["./when-cbf8cd21","./Check-35e1a91d","./Math-e66fad2a","./Cartesian2-44433f55","./Transforms-a6071fdb","./RuntimeError-f4c64df1","./WebGLConstants-95ceb4e9","./ComponentDatatype-7ee14e67","./GeometryAttribute-d239a979","./GeometryAttributes-90846c5f","./AttributeCompression-170b3be0","./GeometryPipeline-ab464aa2","./EncodedCartesian3-e9d8b15b","./IndexDatatype-66caba23","./IntersectionTests-5912ffe9","./Plane-b2b7f933","./GeometryOffsetAttribute-84f7eff3","./VertexFormat-cc24f342","./EllipseGeometryLibrary-ced41b66","./GeometryInstance-f9895b88","./EllipseGeometry-07585a45"],function(r,e,t,n,a,i,o,s,c,f,b,l,d,m,p,y,u,G,C,E,A){"use strict";return function(e,t){return r.defined(t)&&(e=A.EllipseGeometry.unpack(e,t)),e._center=n.Cartesian3.clone(e._center),e._ellipsoid=n.Ellipsoid.clone(e._ellipsoid),A.EllipseGeometry.createGeometry(e)}});
