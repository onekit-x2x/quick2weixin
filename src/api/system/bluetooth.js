module.exports = {
  /* bluetooth.openAdapter*/
  openAdapter(quick_object) {
    if (!quick_object) {
      return;
    }
    let quick_success = quick_object.success;
    let quick_fail = quick_object.fail;
    let quick_complete = quick_object.complete;
    let quick_operateAdapter = quick_object.operateAdapter || false;
    quick_object =null;
    //////////////////////////////////////////
    var wx_object = {};
    if(quick_operateAdapter){
      wx_object.operateAdapter = quick_operateAdapter
    }
    wx_object.success = function(wx_res) {
      var quick_res = {};
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.openBluetoothAdapter(wx_object)
  }
  /**
    bluetooth.closeAdapter({
   *
   */
  ,
  closeAdapter(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_operateAdapter = quick_object.operateAdapter || false;
    ////////////////////////////////////////
    var wx_object = {};
    wx_object.success = function(wx_res) {
      var quick_res = {};
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.closeBluetoothAdapter(wx_object)
  }
  /**bluetooth.getAdapterState */
  ,
  getAdapterState(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    /////////////////////////////////////
    var wx_object = {};
    wx_object.success = function(wx_res) {
      var quick_res = {};
      quick_res.available = wx_res.available
      quick_res.discovering = wx_res.discovering
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.getBluetoothAdapterState(wx_object)
  }

  /**bluetooth.onadapterstatechange 监听监听蓝牙适配器状态变化事件 */
  ,
  onadapterstatechange() {
    return wx.onBluetoothAdapterStateChange()
  }
  /**bluetooth.startDevicesDiscovery */
  ,
  startDevicesDiscovery(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_services = quick_object.services;
    var quick_allowDuplicatesKey = quick_object.allowDuplicatesKey;
    var quick_interval = quick_object.interval;
    ////////////////////////////////////////////
    var wx_object = {};
    if (quick_services) {
      wx_object.services = quick_services
    };
    if (quick_allowDuplicatesKey) {
      wx_object.allowDuplicatesKey = quick_allowDuplicatesKey
    };
    if (quick_interval) {
      wx_object.interval = quick_interval
    }
    wx_object.success = function(wx_res) {
      var quick_res = {};
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.startBluetoothDevicesDiscovery(wx_object)
  }

  /** bluetooth.stopDevicesDiscovery */
  ,
  stopDevicesDiscovery(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    //////////////////////////////////
    var wx_object = {};
    wx_object.success = function(wx_res) {
      var quick_res = {};
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.stopBluetoothDevicesDiscovery(wx_object)
  }

  /**bluetooth.getDevices */
  ,
  getDevices(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    //////////////////////////////////
    var wx_object = {};
    wx_object.success = function(wx_res) {
      var quick_res = {
        devices: wx_res.devices
      };
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.getBluetoothDevices(wx_object)
  }

  /**bluetooth.ondevicefound */
  ,
  ondevicefound(quick_object) {
    return wx.onBluetoothDeviceFound(function(res) {})
  }

  /**bluetooth.getConnectedDevices */
  ,
  getConnectedDevices(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_services = quick_object.services;
    //////////////////////////////////
    return wx.onBluetoothDeviceFound(function(callback) {
      quick_services.devices = callback.devices;
    })
  }

  /**bluetooth.createBLEConnection */
  ,
  createBLEConnection(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_timeout = quick_object.timeout;
    ////////////////////////////////////
    var wx_object = {};
    if (quick_deviceId) {
      wx_object.deviceId = quick_deviceId;
    };
    if (quick_timeout) {
      wx_object.timeout = quick_timeout;
    };

    wx_object.success = function(wx_res) {
      if (quick_success) {
        quick_success(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.createBLEConnection(wx_object)
  }

  /**bluetooth.closeBLEConnection */
  ,
  closeBLEConnection(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    ////////////////////////////////////
    var wx_object = {};
    if (quick_deviceId) {
      wx_object.deviceId = quick_deviceId;
    };
    wx_object.success = function(wx_res) {
      if (quick_success) {
        quick_success(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.closeBLEConnection(wx_object)
  }

  /**bluetooth.getBLEDeviceServices */
  ,
  getBLEDeviceServices(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    ////////////////////////////////////
    var wx_object = {};
    if (quick_deviceId) {
      wx_object.deviceId = quick_deviceId;
    };
    wx_object.success = function(wx_res) {
      var quick_res = {
        services: wx_res.services
      };
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.getBLEDeviceServices(wx_object)
  }

  /**bluetooth.getBLEDeviceCharacteristics */
  ,
  getBLEDeviceCharacteristics(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    ////////////////////////////////////
    var wx_object = {};
    if (quick_deviceId) {
      wx_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      wx_object.serviceId = quick_serviceId
    };
    wx_object.success = function(wx_res) {
      var quick_res = {
        characteristics: wx_res.characteristics
      };
      if (quick_success) {
        quick_success(quick_res);
      }
      if (quick_complete) {
        quick_complete(quick_res);
      }
    };
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.getBLEDeviceCharacteristics(wx_object)
  }

  /**bluetooth.readBLECharacteristicValue */
  ,
  readBLECharacteristicValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_characteristicId = quick_object.characteristicId;
    ////////////////////////////////////
    var wx_object = {};
    if (quick_deviceId) {
      wx_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      wx_object.serviceId = quick_serviceId
    };
    if (quick_characteristicId) {
      wx_object.characteristicId = quick_characteristicId
    }
    wx_object.success = function(wx_res) {
      if (quick_success) {
        quick_success(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.readBLECharacteristicValue(wx_object)
  }

  /**bluetooth.writeBLECharacteristicValue */
  ,
  writeBLECharacteristicValue(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_characteristicId = quick_object.characteristicId;
    var quick_value = quick_object.value;
    ////////////////////////////////////
    var wx_object = {};
    if (quick_deviceId) {
      wx_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      wx_object.serviceId = quick_serviceId
    };
    if (quick_characteristicId) {
      wx_object.characteristicId = quick_characteristicId
    }
    if (quick_value) {
      wx_object.value = quick_value
    }
    wx_object.success = function(wx_res) {
      if (quick_success) {
        quick_success(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.writeBLECharacteristicValue(wx_object)
  }
  /**bluetooth.notifyBLECharacteristicValueChange */
  ,
  notifyBLECharacteristicValueChange(quick_object) {
    if (!quick_object) {
      return;
    }
    var quick_success = quick_success;
    var quick_fail = quick_fail;
    var quick_complete = quick_complete;
    var quick_deviceId = quick_object.deviceId;
    var quick_serviceId = quick_object.serviceId;
    var quick_characteristicId = quick_object.characteristicId;
    var quick_state = quick_object.state;
    ////////////////////////////////////////
    var wx_object = {};
    if (quick_deviceId) {
      wx_object.deviceId = quick_deviceId
    };
    if (quick_serviceId) {
      wx_object.serviceId = quick_serviceId
    };
    if (quick_characteristicId) {
      wx_object.characteristicId = quick_characteristicId
    }
    if (quick_state) {
      wx_object.state = quick_state
    }
    wx_object.success = function(wx_res) {
      if (quick_success) {
        quick_success(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    wx_object.fail = function(wx_res) {
      if (quick_fail) {
        quick_fail(wx_res);
      }
      if (quick_complete) {
        quick_complete(wx_res);
      }
    };
    return wx.notifyBLECharacteristicValueChange(wx_object)
  }

  /**bluetooth.onblecharacteristicvaluechange */
  ,
  onblecharacteristicvaluechange() {
    console.log(data)
    return wx.onBLECharacteristicValueChange(function(callback) {})
  }
  /**bluetooth.onbleconnectionstatechange  */
  ,
  onbleconnectionstatechange() {
    return wx.onBLEConnectionStateChange(function(callback) {})
  }
}