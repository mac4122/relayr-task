export const fakeResponse = {
    "data": [
      {
        "deviceId": "40552302-6ea2-476d-9cad-c3ab142a2ef5",
        "createdAt": "2021-08-19T20:02:09.986Z",
        "updatedAt": "2021-09-16T16:35:51.612Z",
        "deviceName": "electric_vehicle",
        "deviceModel": "acme_em_v3.0.0",
        "location": {
          "lat": "-45.0274",
          "lon": "-96.0561"
        },
        "measurementModels": [
          {
            "name": "speed",
            "type": "number",
            "unit": "m/s",
            "min": -9,
            "max": 10
          },
          {
            "name": "shift",
            "type": "number",
            "unit": "mm",
            "min": -3,
            "max": 50
          }
        ],
        "measurements": [
          [
            [-4, "2021-08-23T06:22:55.689Z"],
            [-4, "2021-09-03T00:54:01.269Z"]
          ],
          [[13, "2021-08-23T09:52:04.879Z"]]
        ],
        "active": false,
        "zipCode": "88138",
        "metadata": {
          "application": "transmitter",
          "capacitor": "firewall",
          "protocol": "panel"
        },
        "alerts": [
          {
            "name": "main_unit_overloaded",
            "severity": 1,
            "state": "cleared",
            "timestamp": "2021-09-06T23:05:28.766Z"
          },
          {
            "name": "main_unit_overloaded",
            "severity": 0,
            "state": "cleared",
            "timestamp": "2021-08-24T01:30:43.786Z"
          }
        ]
      }
    ],
    "total": 1,
    "timestamp": "2021-11-09T22:05:07.453Z"
  };

export const fakeResponseByKey = {
    "40552302-6ea2-476d-9cad-c3ab142a2ef5":
      {
        "deviceId": "40552302-6ea2-476d-9cad-c3ab142a2ef5",
        "createdAt": "2021-08-19T20:02:09.986Z",
        "updatedAt": "2021-09-16T16:35:51.612Z",
        "deviceName": "electric_vehicle",
        "deviceModel": "acme_em_v3.0.0",
        "location": {
          "lat": "-45.0274",
          "lon": "-96.0561"
        },
        "measurementModels": [
          {
            "name": "speed",
            "type": "number",
            "unit": "m/s",
            "min": -9,
            "max": 10
          },
          {
            "name": "shift",
            "type": "number",
            "unit": "mm",
            "min": -3,
            "max": 50
          }
        ],
        "measurements": [
          [
            [-4, "2021-08-23T06:22:55.689Z"],
            [-4, "2021-09-03T00:54:01.269Z"]
          ],
          [[13, "2021-08-23T09:52:04.879Z"]]
        ],
        "active": false,
        "zipCode": "88138",
        "metadata": {
          "application": "transmitter",
          "capacitor": "firewall",
          "protocol": "panel"
        },
        "alerts": [
          {
            "name": "main_unit_overloaded",
            "severity": 1,
            "state": "cleared",
            "timestamp": "2021-09-06T23:05:28.766Z"
          },
          {
            "name": "main_unit_overloaded",
            "severity": 0,
            "state": "cleared",
            "timestamp": "2021-08-24T01:30:43.786Z"
          }
        ]
      }
  };