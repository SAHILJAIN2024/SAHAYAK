class DomainMapper:

    def map_domain(
        self,
        domain: str
    ) -> str:

        mapping = {

            "data_science":
                "Data Science",

            "travel":
                "Travel",

            "career":
                "Career",

            "coding":
                "Coding",

            "healthcare":
                "Healthcare",

            "general":
                "General"
        }

        return mapping.get(
            domain,
            "General"
        )