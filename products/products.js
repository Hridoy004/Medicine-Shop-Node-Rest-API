const meds = [
    {
        _id: '1',
        name: 'napa',
        image: '/images/vic1021221vxcb.jpg',
        description: '',
        price: '৳400.00',

    },
    {
        _id: '1',
        name: 'napa',
        image: '/images/vic1021221vxcb.jpg',
        description: '',
        price: '৳400.00',

    },
    {
        _id: '1',
        name: 'napa',
        image: '/images/vic1021221vxcb.jpg',
        description: '',
        price: '৳400.00',

    },
    {

        _id: '1',
        name: 'napa',
        image: '/images/vic1021221vxcb.jpg',
        description: '',
        price: '৳400.00',

    },
    {
        _id: '1',
        name: 'napa',
        image: '/images/vic1021221vxcb.jpg',
        description: '',
        price: '৳400.00',

    },
    {
        _id: '1',
        name: 'napa',
        image: '/images/vic1021221vxcb.jpg',
        description: '',
        price: '৳400.00',

    },
    {
        _id: '1',
        name: 'napa',
        image: '/images/vic1021221vxcb.jpg',
        description: '',
        price: '৳400.00',
    },
]

let products = (app) => {

    app.get('/products', (req, res) => {
        res.send(meds);
    });

    app.get('/api/courses', (req, res) => {
        res.send(req.query);
    })

}


module.exports = products;