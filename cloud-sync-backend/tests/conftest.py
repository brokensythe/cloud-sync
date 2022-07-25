import pytest
from app import instance

@pytest.fixture()
def app():
    instance.config.update({
        "TESTING": True,
    })

    yield instance


@pytest.fixture()
def client(app):
    return app.test_client()


@pytest.fixture()
def runner(app):
    return app.test_cli_runner()


