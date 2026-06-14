from agents.core.tool_registry import ToolRegistry

from tools.ds_tools.dataset_analyzer import (
    DatasetAnalyzer
)

registry = ToolRegistry()

registry.register_tool(
    "dataset_analyzer",
    DatasetAnalyzer()
)