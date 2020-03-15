const formatPrice = (x) => {
    if(Number.isNaN(x)) return null
    if(x){
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return 0
}

export default formatPrice