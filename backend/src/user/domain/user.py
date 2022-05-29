from typing import Optional
from dataclasses import dataclass

@dataclass
class User:
    email: str
    first_name: str
    last_name: str
    id: Optional[int] = None
