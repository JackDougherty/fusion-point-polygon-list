jQuery.extend( jQuery.fn.dataTableExt.oSort, {
    "data-value-string-pre": function ( a ) {
        return a.match(/data-value="(.*?)"/)[1].toLowerCase();
    },
    
    "data-value-string-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
    
    "data-value-string-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    },


    "data-value-num-pre": function ( a ) {
        var x = a.match(/data-value="*([0-9\-\.]+)/)[1];
        return parseFloat( x );
    },
    
    "data-value-num-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ? 1 : 0));
    },
    
    "data-value-num-desc": function ( a, b ) {
        return ((a < b) ? 1 : ((a > b) ? -1 : 0));
    },

    "html-num-pre": function ( a ) {
        return parseFloat( a.replace( /<.*?>/g, "" ).replace("$","").replace(",","") );
    },
    
    "html-num-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ?  1 : 0));
    },
    
    "html-num-desc": function ( a, b ) {
        return ((a < b) ?  1 : ((a > b) ? -1 : 0));
    },

    "html-string-pre": function ( a ) {
        return a.replace( /<.*?>/g, "" ).toLowerCase();
    },
    
    "html-string-asc": function ( a, b ) {
        return ((a < b) ? -1 : ((a > b) ?  1 : 0));
    },
    
    "html-string-desc": function ( a, b ) {
        return ((a < b) ?  1 : ((a > b) ? -1 : 0));
    }
} );