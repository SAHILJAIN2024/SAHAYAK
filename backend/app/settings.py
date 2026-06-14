from pydantic_settings import BaseSettings


class Settings(BaseSettings):

    APP_NAME: str = "UPSS"

    DEBUG: bool = True

    OPENAI_API_KEY: str = ""

    GEMINI_API_KEY: str = ""

    DATABASE_URL: str

    REDIS_HOST: str

    REDIS_PORT: int

    QDRANT_HOST: str

    QDRANT_PORT: int

    class Config:
        env_file = ".env"


settings = Settings()