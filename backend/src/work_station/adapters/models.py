from uuid import uuid4

from django.db import models
from django.contrib.auth.models import User

class WorkStation(models.Model):
    station_id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=30)

class WorkStationRoom(models.Model):
    room_id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    name = models.CharField(max_length=30)
    stations = models.ManyToManyField(WorkStation)

class StationBooking(models.Model):
    person = models.ForeignKey(User, on_delete=models.CASCADE)
    station = models.ForeignKey(WorkStation, on_delete=models.CASCADE)
    date = models.DateField()
