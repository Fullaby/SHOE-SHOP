
function convertToID (value){
    return `${value.toLocaleString('id-ID')},00`
}

function formatRp(values){
    return `Rp. ${values.toLocaleString('id-ID')},00`

}

function formatDate(values){
    return values.toISOString().substring(0,10).split('T')[0]
}

module.exports= {formatRp, formatDate, convertToID}

