def test_request_example(client):
    response = client.get("/test")
    assert b"Hello World" in response.data
