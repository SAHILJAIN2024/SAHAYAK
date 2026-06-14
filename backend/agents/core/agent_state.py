from dataclasses import dataclass, field
from typing import Any, Dict, List


@dataclass
class AgentState:

    user_query: str

    domain: str = ""

    file_path: str = ""

    execution_plan: List[str] = field(
        default_factory=list
    )

    context: Dict[str, Any] = field(
        default_factory=dict
    )

    tool_outputs: Dict[str, Any] = field(
        default_factory=dict
    )

    final_response: str = ""