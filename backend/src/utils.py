import dataclasses, json, datetime

class EnhancedJSONEncoder(json.JSONEncoder):
        def default(self, obj):
            if dataclasses.is_dataclass(obj):
                return dataclasses.asdict(obj)
            elif isinstance(obj, (datetime.datetime, datetime.date, datetime.time)):
                return (str(obj))
            return super().default(obj)
            