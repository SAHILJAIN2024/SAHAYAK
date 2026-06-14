from fastapi import (
    APIRouter,
    UploadFile,
    File,
    Form
)

import os

from agents.core.agent_state import (
    AgentState
)

from agents.orchestrator.orchestrator_agent import (
    OrchestratorAgent
)

router = APIRouter()

agent = OrchestratorAgent()


@router.post("/chat")
async def chat(

    message: str = Form(...),

    file: UploadFile = File(None)

):

    file_path = ""

    if file:

        upload_dir = (
            "uploads/datasets"
        )

        os.makedirs(
            upload_dir,
            exist_ok=True
        )

        file_path = os.path.join(
            upload_dir,
            file.filename
        )

        with open(
            file_path,
            "wb"
        ) as buffer:

            content = await file.read()

            buffer.write(
                content
            )

    state = AgentState(

        user_query=message,

        file_path=file_path

    )

    result = agent.execute(
        state
    )

    return {

        "domain":
            result.domain,

        "execution_plan":
            result.execution_plan,

        "response":
            result.final_response

    }