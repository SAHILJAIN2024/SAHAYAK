class DomainClassifier:

    def classify(
        self,
        query: str
    ) -> str:

        query = query.lower()

        if any(
            word in query
            for word in [
                "dataset",
                "machine learning",
                "data analysis",
                "EDA",
                "Data Visualization",
                "data",
                "model",
                "csv",
                "analysis"
            ]
        ):
            return "data_science"

        if any(
            word in query
            for word in [
                "trip",
                "travel",
                "flight",
                "hotel",
                "vacation",
                "destination",
                "visiting",
                "tourist",
                
                "tour"
            ]
        ):
            return "travel"

        if any(
            word in query
            for word in [
                "resume",
                "job",
                "internship",
                "career",
                "ats"
            ]
        ):
            return "career"

        if any(
            word in query
            for word in [
                "code",
                "python",
                "java",
                "website",
                "programming"
            ]
        ):
            return "coding"

        if any(
            word in query
            for word in [
                "doctor",
                "disease",
                "health",
                "diabetes",
                "medicine"
            ]
        ):
            return "healthcare"

        return "general"