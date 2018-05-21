# GasolinApp ⛽

## Description

A backend application created with [NestJs](https://nestjs.com/) and Typescript.

The app will fetch fuel prices of all gas stations from Spain, will map them to a more friendly entity and will store them into a database.

The app will provide fuel stations through an API depending on their location and filter fuel stations by fuel type.

## Docs

Every response will have the same format:

```js
{
  "data": [],
  // or
  "data": {},
  // and aditional information like:
  "page": 2
}
```

### `GET /stations`

Available stations that the client can ask for.

| Query Param          | Type   | Description         |
| -------------------- | ------ | ------------------- |
| latitude & longitude | long   |                     |
| query                | string | text to search for  |
| fuelType             | int    | id of the fuel type |
| page                 | int    |                     |

This example shows a response with all the available fields in a station:

```js
{
  "data": [
    {
      "id": 53,
      "name": "Repsol",
      "schedule": "L-D: 24H",
      "postalCode": "01240",
      "address": "CL MANISITU, 9",
      "city": "Alegría-Dulantzi",
      "state": "ÁLAVA",
      "latitude": 42.846028,
      "longitude": -2.509361,
      "fuels": [
        {
          "type": {
            "id": 7,
            "name": "Gasoleo A"
          },
          "price": 1.219
        }
      ]
    }
  ]
}
```

### `GET /fuelTypes`

Available fuel types with which the client can query the stations.

```js
{
  "data": [
    {
      "id": 7,
      "name": "Gasoleo A"
    },
    {
      "id": 8,
      "name": "Gasolina 98"
    }
  ]
}
```
