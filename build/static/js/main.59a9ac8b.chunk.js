(this.webpackJsonptrain_reservation=this.webpackJsonptrain_reservation||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},16:function(t,e){e.base_url="https://d2cnodeserver.herokuapp.com"},17:function(t,e,n){"use strict";n.r(e);var o=n(1),r=n.n(o),s=n(7),a=n.n(s),i=(n(12),n(3)),c=n(4),l=n(6),u=n(5),d=(n(13),n(0)),b=n(15),h=n(16).base_url,j=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){return Object(i.a)(this,n),e.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){var t=null!=this.props.booked?"seat ":"seat_loading";return t+=1===this.props.booked?"booked":2===this.props.booked?"booked_now":"",t+=this.props.number%7===3?" path":"",Object(d.jsx)("div",{className:t,style:this.props.style,children:this.props.number})}}]),n}(r.a.Component),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(t){var o;return Object(i.a)(this,n),(o=e.call(this,t)).state={seatState:Array(80).fill(null),selectedSeatCount:1,clearButton:{class:"sqe_button",text:"Clear"},bookButton:{class:"sqe_button",text:"Book"}},o}return Object(c.a)(n,[{key:"updateBookedSeats",value:function(){var t=this;b(h,{method:"GET",headers:{"Content-Type":"application/json"}}).then((function(t){return t.json()})).then((function(e){console.log(e);var n=Array(80).fill(0);e.map((function(t){return t._id})).forEach((function(t){n[t-1]=1})),t.setState({seatState:n})})).catch((function(t){return console.error("error:"+t)}))}},{key:"componentDidMount",value:function(){this.updateBookedSeats()}},{key:"render",value:function(){var t=this,e={display:"grid",justifyContent:"center"},n=window.innerWidth<=700;return n||(e.gridTemplateColumns="repeat(3, auto)"),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("span",{style:{fontSize:"xx-large",margin:"auto",paddingTop:"1rem"},children:"Book your Tickets"}),Object(d.jsxs)("div",{style:e,children:[Object(d.jsxs)("p",{style:{lineHeight:"2rem",display:"inline-block"},children:[Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(d.jsx)("div",{style:{width:"1rem",height:"1rem",backgroundColor:"#1fd262",borderRadius:"0.2rem"}}),Object(d.jsx)("div",{style:{marginLeft:"0.5rem"},children:"Booked"})]}),Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(d.jsx)("div",{style:{width:"1rem",height:"1rem",backgroundColor:"#d2ca1f",borderRadius:"0.2rem"}}),Object(d.jsx)("div",{style:{marginLeft:"0.5rem"},children:"You Just Booked"})]}),Object(d.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[Object(d.jsx)("div",{style:{width:"1rem",height:"1rem",backgroundColor:"#ffffff",borderRadius:"0.2rem"}}),Object(d.jsx)("div",{style:{marginLeft:"0.5rem"},children:"Available"})]})]}),Object(d.jsx)("div",{className:"seats_layout",style:{margin:n?"0rem 0rem":"0rem 2rem"},children:this.state.seatState.map((function(t,e){return Object(d.jsx)(j,{number:e+1,booked:t})}))}),Object(d.jsxs)("div",{children:[Object(d.jsxs)("div",{style:{marginBottom:"1rem"},children:[Object(d.jsx)("p",{children:"Seats"}),Object(d.jsx)("select",{onChange:function(e){t.setState({selectedSeatCount:e.target.value})},children:Array(7).fill(null).map((function(t,e){return Object(d.jsxs)("option",{value:e+1,children:[" ",e+1," "]})}))})]}),Object(d.jsx)("button",{className:this.state.bookButton.class,onClick:function(){t.setState({bookButton:{class:"sqe_button button_expand",text:"Booking ..."}});var e={method:"POST",headers:{"Content-Type":"application/json"},body:'{"count": '.concat(t.state.selectedSeatCount,"}")};b(h+"/book",e).then((function(t){return t.json()})).then((function(e){var n=e.now_booked,o=e.booked,r=Array(80).fill(0);o.map((function(t){return t._id})).forEach((function(t){r[t-1]=1})),n.forEach((function(t){r[t-1]=2})),t.setState({seatState:r,bookButton:{class:"sqe_button",text:"Book"}})})).catch((function(t){return console.error("error:"+t)}))},children:this.state.bookButton.text})]})]}),Object(d.jsx)("button",{className:this.state.clearButton.class,style:{marginTop:"1rem",backgroundColor:"#e91e1e",color:"white"},onClick:function(){t.setState({clearButton:{class:"sqe_button button_expand",text:"Clearing..."}});b(h+"/clear",{method:"DELETE",headers:{"Content-Type":"application/json"}}).then((function(){t.setState({seatState:Array(80).fill(0),clearButton:{class:"sqe_button",text:"Clear"}})})).catch((function(t){return console.error("error:"+t)}))},children:this.state.clearButton.text})]})}}]),n}(r.a.Component);var f=function(){return Object(d.jsx)("div",{children:Object(d.jsx)(p,{})})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,o=e.getFID,r=e.getFCP,s=e.getLCP,a=e.getTTFB;n(t),o(t),r(t),s(t),a(t)}))};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(f,{})}),document.getElementById("root")),m()}},[[17,1,2]]]);
//# sourceMappingURL=main.59a9ac8b.chunk.js.map