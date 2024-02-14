export const options =[
    {name:'APOD', especific_route:'planetary/apod?', defaultDate: new Date(Date.now()).toISOString().slice(0, 10)},
{name:'ROVER', especific_route: 'mars-photos/api/v1/rovers/curiosity/photos?earth_', defaultDate: '2012-08-06' }
]