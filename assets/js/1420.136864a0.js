"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1420],{1420:(t,e,i)=>{i.d(e,{diagram:()=>T});var n=i(68147),r=i(69084),s=i(27715),a=i(47769),l=(i(36780),i(51716),i(12410),function(){var t=function(t,e,i,n){for(i=i||{},n=t.length;n--;i[t[n]]=e);return i},e=[1,3],i=[1,4],n=[1,5],r=[1,6],s=[5,6,8,9,11,13,31,32,33,34,35,36,44,62,63],a=[1,18],l=[2,7],c=[1,22],o=[1,23],h=[1,24],u=[1,25],y=[1,26],d=[1,27],p=[1,20],_=[1,28],E=[1,29],g=[62,63],R=[5,8,9,11,13,31,32,33,34,35,36,44,51,53,62,63],m=[1,47],f=[1,48],I=[1,49],b=[1,50],k=[1,51],S=[1,52],T=[1,53],N=[53,54],x=[1,64],A=[1,60],v=[1,61],q=[1,62],$=[1,63],O=[1,65],w=[1,69],C=[1,70],L=[1,67],F=[1,68],M=[5,8,9,11,13,31,32,33,34,35,36,44,62,63],D={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,acc_title:9,acc_title_value:10,acc_descr:11,acc_descr_value:12,acc_descr_multiline_value:13,requirementDef:14,elementDef:15,relationshipDef:16,requirementType:17,requirementName:18,STRUCT_START:19,requirementBody:20,ID:21,COLONSEP:22,id:23,TEXT:24,text:25,RISK:26,riskLevel:27,VERIFYMTHD:28,verifyType:29,STRUCT_STOP:30,REQUIREMENT:31,FUNCTIONAL_REQUIREMENT:32,INTERFACE_REQUIREMENT:33,PERFORMANCE_REQUIREMENT:34,PHYSICAL_REQUIREMENT:35,DESIGN_CONSTRAINT:36,LOW_RISK:37,MED_RISK:38,HIGH_RISK:39,VERIFY_ANALYSIS:40,VERIFY_DEMONSTRATION:41,VERIFY_INSPECTION:42,VERIFY_TEST:43,ELEMENT:44,elementName:45,elementBody:46,TYPE:47,type:48,DOCREF:49,ref:50,END_ARROW_L:51,relationship:52,LINE:53,END_ARROW_R:54,CONTAINS:55,COPIES:56,DERIVES:57,SATISFIES:58,VERIFIES:59,REFINES:60,TRACES:61,unqString:62,qString:63,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",9:"acc_title",10:"acc_title_value",11:"acc_descr",12:"acc_descr_value",13:"acc_descr_multiline_value",19:"STRUCT_START",21:"ID",22:"COLONSEP",24:"TEXT",26:"RISK",28:"VERIFYMTHD",30:"STRUCT_STOP",31:"REQUIREMENT",32:"FUNCTIONAL_REQUIREMENT",33:"INTERFACE_REQUIREMENT",34:"PERFORMANCE_REQUIREMENT",35:"PHYSICAL_REQUIREMENT",36:"DESIGN_CONSTRAINT",37:"LOW_RISK",38:"MED_RISK",39:"HIGH_RISK",40:"VERIFY_ANALYSIS",41:"VERIFY_DEMONSTRATION",42:"VERIFY_INSPECTION",43:"VERIFY_TEST",44:"ELEMENT",47:"TYPE",49:"DOCREF",51:"END_ARROW_L",53:"LINE",54:"END_ARROW_R",55:"CONTAINS",56:"COPIES",57:"DERIVES",58:"SATISFIES",59:"VERIFIES",60:"REFINES",61:"TRACES",62:"unqString",63:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,2],[4,2],[4,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[14,5],[20,5],[20,5],[20,5],[20,5],[20,2],[20,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[27,1],[27,1],[27,1],[29,1],[29,1],[29,1],[29,1],[15,5],[46,5],[46,5],[46,2],[46,1],[16,5],[16,5],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[18,1],[18,1],[23,1],[23,1],[25,1],[25,1],[45,1],[45,1],[48,1],[48,1],[50,1],[50,1]],performAction:function(t,e,i,n,r,s,a){var l=s.length-1;switch(r){case 4:this.$=s[l].trim(),n.setAccTitle(this.$);break;case 5:case 6:this.$=s[l].trim(),n.setAccDescription(this.$);break;case 7:this.$=[];break;case 13:n.addRequirement(s[l-3],s[l-4]);break;case 14:n.setNewReqId(s[l-2]);break;case 15:n.setNewReqText(s[l-2]);break;case 16:n.setNewReqRisk(s[l-2]);break;case 17:n.setNewReqVerifyMethod(s[l-2]);break;case 20:this.$=n.RequirementType.REQUIREMENT;break;case 21:this.$=n.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 22:this.$=n.RequirementType.INTERFACE_REQUIREMENT;break;case 23:this.$=n.RequirementType.PERFORMANCE_REQUIREMENT;break;case 24:this.$=n.RequirementType.PHYSICAL_REQUIREMENT;break;case 25:this.$=n.RequirementType.DESIGN_CONSTRAINT;break;case 26:this.$=n.RiskLevel.LOW_RISK;break;case 27:this.$=n.RiskLevel.MED_RISK;break;case 28:this.$=n.RiskLevel.HIGH_RISK;break;case 29:this.$=n.VerifyType.VERIFY_ANALYSIS;break;case 30:this.$=n.VerifyType.VERIFY_DEMONSTRATION;break;case 31:this.$=n.VerifyType.VERIFY_INSPECTION;break;case 32:this.$=n.VerifyType.VERIFY_TEST;break;case 33:n.addElement(s[l-3]);break;case 34:n.setNewElementType(s[l-2]);break;case 35:n.setNewElementDocRef(s[l-2]);break;case 38:n.addRelationship(s[l-2],s[l],s[l-4]);break;case 39:n.addRelationship(s[l-2],s[l-4],s[l]);break;case 40:this.$=n.Relationships.CONTAINS;break;case 41:this.$=n.Relationships.COPIES;break;case 42:this.$=n.Relationships.DERIVES;break;case 43:this.$=n.Relationships.SATISFIES;break;case 44:this.$=n.Relationships.VERIFIES;break;case 45:this.$=n.Relationships.REFINES;break;case 46:this.$=n.Relationships.TRACES}},table:[{3:1,4:2,6:e,9:i,11:n,13:r},{1:[3]},{3:8,4:2,5:[1,7],6:e,9:i,11:n,13:r},{5:[1,9]},{10:[1,10]},{12:[1,11]},t(s,[2,6]),{3:12,4:2,6:e,9:i,11:n,13:r},{1:[2,2]},{4:17,5:a,7:13,8:l,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:c,32:o,33:h,34:u,35:y,36:d,44:p,62:_,63:E},t(s,[2,4]),t(s,[2,5]),{1:[2,1]},{8:[1,30]},{4:17,5:a,7:31,8:l,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:c,32:o,33:h,34:u,35:y,36:d,44:p,62:_,63:E},{4:17,5:a,7:32,8:l,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:c,32:o,33:h,34:u,35:y,36:d,44:p,62:_,63:E},{4:17,5:a,7:33,8:l,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:c,32:o,33:h,34:u,35:y,36:d,44:p,62:_,63:E},{4:17,5:a,7:34,8:l,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:c,32:o,33:h,34:u,35:y,36:d,44:p,62:_,63:E},{4:17,5:a,7:35,8:l,9:i,11:n,13:r,14:14,15:15,16:16,17:19,23:21,31:c,32:o,33:h,34:u,35:y,36:d,44:p,62:_,63:E},{18:36,62:[1,37],63:[1,38]},{45:39,62:[1,40],63:[1,41]},{51:[1,42],53:[1,43]},t(g,[2,20]),t(g,[2,21]),t(g,[2,22]),t(g,[2,23]),t(g,[2,24]),t(g,[2,25]),t(R,[2,49]),t(R,[2,50]),{1:[2,3]},{8:[2,8]},{8:[2,9]},{8:[2,10]},{8:[2,11]},{8:[2,12]},{19:[1,44]},{19:[2,47]},{19:[2,48]},{19:[1,45]},{19:[2,53]},{19:[2,54]},{52:46,55:m,56:f,57:I,58:b,59:k,60:S,61:T},{52:54,55:m,56:f,57:I,58:b,59:k,60:S,61:T},{5:[1,55]},{5:[1,56]},{53:[1,57]},t(N,[2,40]),t(N,[2,41]),t(N,[2,42]),t(N,[2,43]),t(N,[2,44]),t(N,[2,45]),t(N,[2,46]),{54:[1,58]},{5:x,20:59,21:A,24:v,26:q,28:$,30:O},{5:w,30:C,46:66,47:L,49:F},{23:71,62:_,63:E},{23:72,62:_,63:E},t(M,[2,13]),{22:[1,73]},{22:[1,74]},{22:[1,75]},{22:[1,76]},{5:x,20:77,21:A,24:v,26:q,28:$,30:O},t(M,[2,19]),t(M,[2,33]),{22:[1,78]},{22:[1,79]},{5:w,30:C,46:80,47:L,49:F},t(M,[2,37]),t(M,[2,38]),t(M,[2,39]),{23:81,62:_,63:E},{25:82,62:[1,83],63:[1,84]},{27:85,37:[1,86],38:[1,87],39:[1,88]},{29:89,40:[1,90],41:[1,91],42:[1,92],43:[1,93]},t(M,[2,18]),{48:94,62:[1,95],63:[1,96]},{50:97,62:[1,98],63:[1,99]},t(M,[2,36]),{5:[1,100]},{5:[1,101]},{5:[2,51]},{5:[2,52]},{5:[1,102]},{5:[2,26]},{5:[2,27]},{5:[2,28]},{5:[1,103]},{5:[2,29]},{5:[2,30]},{5:[2,31]},{5:[2,32]},{5:[1,104]},{5:[2,55]},{5:[2,56]},{5:[1,105]},{5:[2,57]},{5:[2,58]},{5:x,20:106,21:A,24:v,26:q,28:$,30:O},{5:x,20:107,21:A,24:v,26:q,28:$,30:O},{5:x,20:108,21:A,24:v,26:q,28:$,30:O},{5:x,20:109,21:A,24:v,26:q,28:$,30:O},{5:w,30:C,46:110,47:L,49:F},{5:w,30:C,46:111,47:L,49:F},t(M,[2,14]),t(M,[2,15]),t(M,[2,16]),t(M,[2,17]),t(M,[2,34]),t(M,[2,35])],defaultActions:{8:[2,2],12:[2,1],30:[2,3],31:[2,8],32:[2,9],33:[2,10],34:[2,11],35:[2,12],37:[2,47],38:[2,48],40:[2,53],41:[2,54],83:[2,51],84:[2,52],86:[2,26],87:[2,27],88:[2,28],90:[2,29],91:[2,30],92:[2,31],93:[2,32],95:[2,55],96:[2,56],98:[2,57],99:[2,58]},parseError:function(t,e){if(!e.recoverable){var i=new Error(t);throw i.hash=e,i}this.trace(t)},parse:function(t){var e=this,i=[0],n=[],r=[null],s=[],a=this.table,l="",c=0,o=0,h=s.slice.call(arguments,1),u=Object.create(this.lexer),y={yy:{}};for(var d in this.yy)Object.prototype.hasOwnProperty.call(this.yy,d)&&(y.yy[d]=this.yy[d]);u.setInput(t,y.yy),y.yy.lexer=u,y.yy.parser=this,void 0===u.yylloc&&(u.yylloc={});var p=u.yylloc;s.push(p);var _=u.options&&u.options.ranges;"function"==typeof y.yy.parseError?this.parseError=y.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var E,g,R,m,f,I,b,k,S,T={};;){if(g=i[i.length-1],this.defaultActions[g]?R=this.defaultActions[g]:(null==E&&(S=void 0,"number"!=typeof(S=n.pop()||u.lex()||1)&&(S instanceof Array&&(S=(n=S).pop()),S=e.symbols_[S]||S),E=S),R=a[g]&&a[g][E]),void 0===R||!R.length||!R[0]){var N="";for(f in k=[],a[g])this.terminals_[f]&&f>2&&k.push("'"+this.terminals_[f]+"'");N=u.showPosition?"Parse error on line "+(c+1)+":\n"+u.showPosition()+"\nExpecting "+k.join(", ")+", got '"+(this.terminals_[E]||E)+"'":"Parse error on line "+(c+1)+": Unexpected "+(1==E?"end of input":"'"+(this.terminals_[E]||E)+"'"),this.parseError(N,{text:u.match,token:this.terminals_[E]||E,line:u.yylineno,loc:p,expected:k})}if(R[0]instanceof Array&&R.length>1)throw new Error("Parse Error: multiple actions possible at state: "+g+", token: "+E);switch(R[0]){case 1:i.push(E),r.push(u.yytext),s.push(u.yylloc),i.push(R[1]),E=null,o=u.yyleng,l=u.yytext,c=u.yylineno,p=u.yylloc;break;case 2:if(I=this.productions_[R[1]][1],T.$=r[r.length-I],T._$={first_line:s[s.length-(I||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(I||1)].first_column,last_column:s[s.length-1].last_column},_&&(T._$.range=[s[s.length-(I||1)].range[0],s[s.length-1].range[1]]),void 0!==(m=this.performAction.apply(T,[l,o,c,y.yy,R[1],r,s].concat(h))))return m;I&&(i=i.slice(0,-1*I*2),r=r.slice(0,-1*I),s=s.slice(0,-1*I)),i.push(this.productions_[R[1]][0]),r.push(T.$),s.push(T._$),b=a[i[i.length-2]][i[i.length-1]],i.push(b);break;case 3:return!0}}return!0}},P={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,i=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var n=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),i.length-1&&(this.yylineno-=i.length-1);var r=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:i?(i.length===n.length?this.yylloc.first_column:0)+n[n.length-i.length].length-i[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[r[0],r[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var i,n,r;if(this.options.backtrack_lexer&&(r={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(r.yylloc.range=this.yylloc.range.slice(0))),(n=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=n.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:n?n[n.length-1].length-n[n.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],i=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),i)return i;if(this._backtrack){for(var s in r)this[s]=r[s];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,i,n;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var r=this._currentRules(),s=0;s<r.length;s++)if((i=this._input.match(this.rules[r[s]]))&&(!e||i[0].length>e[0].length)){if(e=i,n=s,this.options.backtrack_lexer){if(!1!==(t=this.test_match(i,r[s])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,r[n]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var t=this.next();return t||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,i,n){switch(i){case 0:return"title";case 1:return this.begin("acc_title"),9;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),11;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:case 48:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:return 5;case 9:case 10:case 11:break;case 12:return 8;case 13:return 6;case 14:return 19;case 15:return 30;case 16:return 22;case 17:return 21;case 18:return 24;case 19:return 26;case 20:return 28;case 21:return 31;case 22:return 32;case 23:return 33;case 24:return 34;case 25:return 35;case 26:return 36;case 27:return 37;case 28:return 38;case 29:return 39;case 30:return 40;case 31:return 41;case 32:return 42;case 33:return 43;case 34:return 44;case 35:return 55;case 36:return 56;case 37:return 57;case 38:return 58;case 39:return 59;case 40:return 60;case 41:return 61;case 42:return 47;case 43:return 49;case 44:return 51;case 45:return 54;case 46:return 53;case 47:this.begin("string");break;case 49:return"qString";case 50:return e.yytext=e.yytext.trim(),62}},rules:[/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[48,49],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,50],inclusive:!0}}};function V(){this.yy={}}return D.lexer=P,V.prototype=D,D.Parser=V,new V}());l.parser=l;const c=l;let o=[],h={},u={},y={},d={};const p={RequirementType:{REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},RiskLevel:{LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},VerifyType:{VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},Relationships:{CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},getConfig:()=>(0,n.c)().req,addRequirement:(t,e)=>(void 0===u[t]&&(u[t]={name:t,type:e,id:h.id,text:h.text,risk:h.risk,verifyMethod:h.verifyMethod}),h={},u[t]),getRequirements:()=>u,setNewReqId:t=>{void 0!==h&&(h.id=t)},setNewReqText:t=>{void 0!==h&&(h.text=t)},setNewReqRisk:t=>{void 0!==h&&(h.risk=t)},setNewReqVerifyMethod:t=>{void 0!==h&&(h.verifyMethod=t)},setAccTitle:n.s,getAccTitle:n.g,setAccDescription:n.b,getAccDescription:n.a,addElement:t=>(void 0===d[t]&&(d[t]={name:t,type:y.type,docRef:y.docRef},n.l.info("Added new requirement: ",t)),y={},d[t]),getElements:()=>d,setNewElementType:t=>{void 0!==y&&(y.type=t)},setNewElementDocRef:t=>{void 0!==y&&(y.docRef=t)},addRelationship:(t,e,i)=>{o.push({type:t,src:e,dst:i})},getRelationships:()=>o,clear:()=>{o=[],h={},u={},y={},d={},(0,n.v)()}},_={CONTAINS:"contains",ARROW:"arrow"},E=_,g=(t,e)=>{let i=t.append("defs").append("marker").attr("id",_.CONTAINS+"_line_ending").attr("refX",0).attr("refY",e.line_height/2).attr("markerWidth",e.line_height).attr("markerHeight",e.line_height).attr("orient","auto").append("g");i.append("circle").attr("cx",e.line_height/2).attr("cy",e.line_height/2).attr("r",e.line_height/2).attr("fill","none"),i.append("line").attr("x1",0).attr("x2",e.line_height).attr("y1",e.line_height/2).attr("y2",e.line_height/2).attr("stroke-width",1),i.append("line").attr("y1",0).attr("y2",e.line_height).attr("x1",e.line_height/2).attr("x2",e.line_height/2).attr("stroke-width",1),t.append("defs").append("marker").attr("id",_.ARROW+"_line_ending").attr("refX",e.line_height).attr("refY",.5*e.line_height).attr("markerWidth",e.line_height).attr("markerHeight",e.line_height).attr("orient","auto").append("path").attr("d",`M0,0\n      L${e.line_height},${e.line_height/2}\n      M${e.line_height},${e.line_height/2}\n      L0,${e.line_height}`).attr("stroke-width",1)};let R={},m=0;const f=(t,e)=>t.insert("rect","#"+e).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",R.rect_min_width+"px").attr("height",R.rect_min_height+"px"),I=(t,e,i)=>{let n=R.rect_min_width/2,r=t.append("text").attr("class","req reqLabel reqTitle").attr("id",e).attr("x",n).attr("y",R.rect_padding).attr("dominant-baseline","hanging"),s=0;i.forEach((t=>{0==s?r.append("tspan").attr("text-anchor","middle").attr("x",R.rect_min_width/2).attr("dy",0).text(t):r.append("tspan").attr("text-anchor","middle").attr("x",R.rect_min_width/2).attr("dy",.75*R.line_height).text(t),s++}));let a=1.5*R.rect_padding+s*R.line_height*.75;return t.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",R.rect_min_width).attr("y1",a).attr("y2",a),{titleNode:r,y:a}},b=(t,e,i,n)=>{let r=t.append("text").attr("class","req reqLabel").attr("id",e).attr("x",R.rect_padding).attr("y",n).attr("dominant-baseline","hanging"),s=0;let a=[];return i.forEach((t=>{let e=t.length;for(;e>30&&s<3;){let i=t.substring(0,30);e=(t=t.substring(30,t.length)).length,a[a.length]=i,s++}if(3==s){let t=a[a.length-1];a[a.length-1]=t.substring(0,t.length-4)+"..."}else a[a.length]=t;s=0})),a.forEach((t=>{r.append("tspan").attr("x",R.rect_padding).attr("dy",R.line_height).text(t)})),r},k=function(t,e,i,s,a){const l=i.edge(S(e.src),S(e.dst)),c=(0,r.n8j)().x((function(t){return t.x})).y((function(t){return t.y})),o=t.insert("path","#"+s).attr("class","er relationshipLine").attr("d",c(l.points)).attr("fill","none");e.type==a.db.Relationships.CONTAINS?o.attr("marker-start","url("+n.e.getUrl(R.arrowMarkerAbsolute)+"#"+e.type+"_line_ending)"):(o.attr("stroke-dasharray","10,7"),o.attr("marker-end","url("+n.e.getUrl(R.arrowMarkerAbsolute)+"#"+E.ARROW+"_line_ending)")),((t,e,i,n)=>{const r=e.node().getTotalLength(),s=e.node().getPointAtLength(.5*r),a="rel"+m;m++;const l=t.append("text").attr("class","req relationshipLabel").attr("id",a).attr("x",s.x).attr("y",s.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(n).node().getBBox();t.insert("rect","#"+a).attr("class","req reqLabelBox").attr("x",s.x-l.width/2).attr("y",s.y-l.height/2).attr("width",l.width).attr("height",l.height).attr("fill","white").attr("fill-opacity","85%")})(t,o,0,`<<${e.type}>>`)},S=t=>t.replace(/\s/g,"").replace(/\./g,"_"),T={parser:c,db:p,renderer:{draw:(t,e,i,l)=>{R=(0,n.c)().requirement;const c=R.securityLevel;let o;"sandbox"===c&&(o=(0,r.Ltv)("#i"+e));const h=("sandbox"===c?(0,r.Ltv)(o.nodes()[0].contentDocument.body):(0,r.Ltv)("body")).select(`[id='${e}']`);g(h,R);const u=new a.T({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:R.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel((function(){return{}}));let y=l.db.getRequirements(),d=l.db.getElements(),p=l.db.getRelationships();var _,E,m;_=y,E=u,m=h,Object.keys(_).forEach((t=>{let e=_[t];t=S(t),n.l.info("Added new requirement: ",t);const i=m.append("g").attr("id",t),r=f(i,"req-"+t);let s=I(i,t+"_title",[`<<${e.type}>>`,`${e.name}`]);b(i,t+"_body",[`Id: ${e.id}`,`Text: ${e.text}`,`Risk: ${e.risk}`,`Verification: ${e.verifyMethod}`],s.y);const a=r.node().getBBox();E.setNode(t,{width:a.width,height:a.height,shape:"rect",id:t})})),((t,e,i)=>{Object.keys(t).forEach((n=>{let r=t[n];const s=S(n),a=i.append("g").attr("id",s),l="element-"+s,c=f(a,l);let o=I(a,l+"_title",["<<Element>>",`${n}`]);b(a,l+"_body",[`Type: ${r.type||"Not Specified"}`,`Doc Ref: ${r.docRef||"None"}`],o.y);const h=c.node().getBBox();e.setNode(s,{width:h.width,height:h.height,shape:"rect",id:s})}))})(d,u,h),((t,e)=>{t.forEach((function(t){let i=S(t.src),n=S(t.dst);e.setEdge(i,n,{relationship:t})}))})(p,u),(0,s.Zp)(u),function(t,e){e.nodes().forEach((function(i){void 0!==i&&void 0!==e.node(i)&&(t.select("#"+i),t.select("#"+i).attr("transform","translate("+(e.node(i).x-e.node(i).width/2)+","+(e.node(i).y-e.node(i).height/2)+" )"))}))}(h,u),p.forEach((function(t){k(h,t,u,e,l)}));const T=R.rect_padding,N=h.node().getBBox(),x=N.width+2*T,A=N.height+2*T;(0,n.i)(h,A,x,R.useMaxWidth),h.attr("viewBox",`${N.x-T} ${N.y-T} ${x} ${A}`)}},styles:t=>`\n\n  marker {\n    fill: ${t.relationColor};\n    stroke: ${t.relationColor};\n  }\n\n  marker.cross {\n    stroke: ${t.lineColor};\n  }\n\n  svg {\n    font-family: ${t.fontFamily};\n    font-size: ${t.fontSize};\n  }\n\n  .reqBox {\n    fill: ${t.requirementBackground};\n    fill-opacity: 1.0;\n    stroke: ${t.requirementBorderColor};\n    stroke-width: ${t.requirementBorderSize};\n  }\n  \n  .reqTitle, .reqLabel{\n    fill:  ${t.requirementTextColor};\n  }\n  .reqLabelBox {\n    fill: ${t.relationLabelBackground};\n    fill-opacity: 1.0;\n  }\n\n  .req-title-line {\n    stroke: ${t.requirementBorderColor};\n    stroke-width: ${t.requirementBorderSize};\n  }\n  .relationshipLine {\n    stroke: ${t.relationColor};\n    stroke-width: 1;\n  }\n  .relationshipLabel {\n    fill: ${t.relationLabelColor};\n  }\n\n`}}}]);