from database.connection import engine
from models.user import Base


def create_tables():
    Base.metadata.create_all(bind=engine)
    print("✅ Tables Created Successfully")


if __name__ == "__main__":
    create_tables()