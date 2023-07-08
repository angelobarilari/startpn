function hasNullOrUndefined(res, ...values) {
    if (values.some(value => value == null)) 
        return res.status(400).json({ 
            message: 'Null or undefined values' 
        });
}

module.exports = hasNullOrUndefined
