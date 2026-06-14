from fastapi import APIRouter

from api.routes.chat import (
    router as chat_router
)

# from api.routes.upload import (
#     router as upload_router
# )

api_router = APIRouter()

api_router.include_router(
    chat_router,
    tags=["Chat"]
)

# api_router.include_router(
#     upload_router,
#     tags=["Upload"]
# )