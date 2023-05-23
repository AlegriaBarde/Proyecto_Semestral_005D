const URL = 'https://testservices.wschilexpress.com/transport-orders/api/v{version}/tracking';

fetch(URL)
    .then(res => res.json());

    {
        "type": "object",
        "properties": {
            "transportOrderNumber": {
                "format": "double",
                "type": "number"
            },
            "reference": {
                "type": "string"
            },
            "rut": {
                "format": "int32",
                "type": "integer"
            },
            "showTrackingEvents": {
                "format": "int32",
                "type": "integer"
            }
        },
        "example": "{\n\t\"reference\": \"27699451457\",\n\t\"transportOrderNumber\": 99726299584,\n\t\"rut\": 77398220,\n\t\"showTrackingEvents\" : 1\n}"
    }

    {
        "reference": "27699451457",
        "transportOrderNumber": 99726299584,
        "rut": 77398220,
        "showTrackingEvents": 1
    }