<?php

namespace App\Http\Controllers\ApiControllers;

use App\Http\Controllers\Controller;
use App\Models\Plant;
use Exception;
use Illuminate\Database\QueryException;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Http\Request;
use Symfony\Component\HttpKernel\Exception\HttpException;

class PlantController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Plant $plant)
    {
        try {
            // Penggunaan paginate membuat query tambahan ke database dan menambah delay.
            // $plant->load([
            //     'latestSoilMoisture',
            //     'soilMoistures'
            //     => function ($query) {
            //         $query->latest()->paginate(15);
            //     }
            // ]);

            $plant->load(['latestSoilMoisture']);
            $plant->soil_moistures = $plant->soilMoistures()->latest()->paginate(15);

            return response()->json([
                'data' => $plant,
            ], 200);
        } catch (QueryException $e) {
            return response()->json(['message' => 'Terjadi kesalahan database.'], 500);
        } catch (HttpException $e) {
            return response()->json(['message' => $e->getMessage()], $e->getStatusCode());
        } catch (HttpResponseException $e) {
            return response()->json(['message' => 'Terjadi kesalahan dalam respons.'], 500);
        } catch (Exception $e) {
            return response()->json(['message' => 'Terjadi Kesalahan Server.'], 500);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Plant $plant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Plant $plant)
    {
        //
    }

    public function showSoilMoistures(Plant $plant)
    {
        try {
            $soilMoistures = $plant->soilMoistures()->latest()->paginate(15);

            return response()->json([
                'data' => $soilMoistures,
            ], 200);
        } catch (QueryException $e) {
            return response()->json(['message' => 'Terjadi kesalahan database.'], 500);
        } catch (HttpException $e) {
            return response()->json(['message' => $e->getMessage()], $e->getStatusCode());
        } catch (HttpResponseException $e) {
            return response()->json(['message' => 'Terjadi kesalahan dalam respons.'], 500);
        } catch (Exception $e) {
            return response()->json(['message' => 'Terjadi Kesalahan Server.'], 500);
        }
    }
}
